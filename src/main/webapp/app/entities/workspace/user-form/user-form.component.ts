import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {UserDTO, Workspace} from "../../../../../../app/shared/api";
import {HttpErrorResponse} from "@angular/common/http";
import {WorkspaceService} from "../service/workspace.service";
import {EventManager} from "../../../core/util/event-manager.service";
import {UserService} from "../../user/user.service";
import {AlertService} from "../../../core/util/alert.service";
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'ms-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() workspaceParent: Workspace = {};
  @Input() userToAdd: UserDTO = {};
  @Input() isPreview = true;
  isEmailValid = false;
  emailSubject: Subject<{ email: string }> = new Subject<{ email: string }>();
  error = false;
  success = false;
  isLoading = false;
  roles = [{
    key: "manager",
    value: "Administrateur"
  }, {
    key: "member",
    value: "Membre"
  }]
  servers = [{
    key: "academy",
    value: "Academy"
  }, {
    key: "v4",
    value: "V4"
  }]

  constructor(private translateService: TranslateService,
              private workspaceService: WorkspaceService,
              private userService: UserService,
              private eventManager: EventManager,
              private alertService: AlertService) {}

  ngOnInit(): void {
    this.emailSubject.pipe(debounceTime(2000)).subscribe((params) => {
      this.checkEmail();
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.userToAdd && changes.userToAdd.currentValue?.id) && this.workspaceParent.id) {
      this.refreshUser(changes.userToAdd.currentValue.id, this.workspaceParent.id);
    }
  }

  protected isCreation(): boolean {
    return !this.userToAdd.id;
  }

  protected refreshUser(userId: string, workspaceId: string): void {
    this.workspaceService.searchUserByUserAndWorkspace({
      userId, workspaceId
    }).subscribe((user) => {
      this.userToAdd = user;
    });
  }

  protected save(): void {
    this.error = false;

    if (this.workspaceParent.id) {
      if(this.isCreation()) {
        this.isLoading = true;
        this.workspaceService
          .addUser(this.userToAdd, this.workspaceParent.id)
          .subscribe({
            next: (user) => {
              this.success = true;
              this.isLoading = false;
              this.isPreview = true;
              this.userToAdd = user;
              this.alertService.addAlert({ type: 'success', translationKey: "Utilisateur mis à jour avec succès." })
              this.eventManager.broadcast('EVENT:WORKSPACE_USER_FETCH');
            }, error: response => this.processError(response)
          });
      } else {
        if (this.userToAdd.id) {
          this.isLoading = true;
          this.workspaceService
            .updateUser(this.userToAdd, this.userToAdd.id, this.workspaceParent.id)
            .subscribe({
              next: (user) => {
                this.success = true;
                this.isLoading = false;
                this.userToAdd = user;
                this.isPreview = true;
                this.alertService.addAlert({ type: 'success', translationKey: "Utilisateur mis à jour avec succès." })
                this.eventManager.broadcast('EVENT:WORKSPACE_USER_FETCH');
              }, error: response => this.processError(response)
            });
        }
      }
    } else {
      this.error = true;
    }
  }

  private checkEmail(): void {
    if (this.workspaceParent.id && this.userToAdd.email) {
      this.workspaceService.isUserInWorkspace(this.workspaceParent.id, this.userToAdd.email).subscribe((isOnWorkspace) => {
        this.isEmailValid = !isOnWorkspace;
      })
    }
  }

  private processError(response: HttpErrorResponse): void {
    this.error = true;
  }
}
