import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {UserDTO, Workspace} from "../../../../../../app/shared/api";
import {HttpErrorResponse} from "@angular/common/http";
import {WorkspaceService} from "../service/workspace.service";
import {EventManager} from "../../../core/util/event-manager.service";

@Component({
  selector: 'ms-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  @Input() workspaceParent: Workspace | null = null;
  error = false;
  success = false;

  addForm = new FormGroup({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ],
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email],
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)
      ],
    }),
    enterprise: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100)
      ],
    }),
    address: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ],
    }),
    additional: new FormControl('', {
      nonNullable: false,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)
      ],
    }),
    zipCode: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(15)
      ],
    }),
    city: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ],
    }),
    country: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ],
    }),
  });

  constructor(private translateService: TranslateService, private workspaceService: WorkspaceService, private eventManager: EventManager) {}

  add(): void {
    const user: UserDTO = this.addForm.getRawValue();
    this.error = false;

    if (this.workspaceParent?.id) {
      this.workspaceService
        .addUser(user, this.workspaceParent.id)
        .subscribe({next: () => {
          this.success = true;
          this.eventManager.broadcast('EVENT:WORKSPACE_USER_FETCH');
        }, error: response => this.processError(response)});
    } else {
      this.error = true;
    }
  }

  private processError(response: HttpErrorResponse): void {
    this.error = true;
  }
}
