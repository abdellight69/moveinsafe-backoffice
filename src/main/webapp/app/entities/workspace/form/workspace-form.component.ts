import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {WorkspaceService} from "../service/workspace.service";
import {ConfigurationDTO, Workspace} from "../../../../../../app/shared/api";
import {HttpErrorResponse} from "@angular/common/http";
import {EventManager} from "../../../core/util/event-manager.service";
import {AlertService} from "../../../core/util/alert.service";

@Component({
  selector: 'ms-workspace-form',
  templateUrl: './workspace-form.component.html',
  styleUrls: ['./workspace-form.component.scss']
})
export class WorkspaceFormComponent {

  @Input() workspaceParent: Workspace | null = null;
  @Input() workspaceToSave: Workspace = {
    id: '',
    name: '',
    organisation: {},
    workspaces: [],
    configuration: [],
    devices: []
  };
  @Input() isPreview = true;
  error = false;
  success = false;
  isLoading = false;

  constructor(private translateService: TranslateService,
              private workspaceService: WorkspaceService,
              private eventManager: EventManager,
              private alertService: AlertService) {}

  protected save(): void {

    if (this.workspaceParent?.id) {
      if (this.workspaceToSave.id) {
        this.isLoading = true;
        this.workspaceService
          .updateWorkspace(this.workspaceToSave, this.workspaceToSave.id, this.workspaceParent.id)
          .subscribe({next: () => {
              this.success = true;
              this.isLoading = false;
              this.alertService.addAlert({ type: 'success', translationKey: "Workspace mis à jour avec succes." })
              this.eventManager.broadcast("EVENT:WORKSPACE_FETCH");
            }, error: (response) => {
              this.processError(response);
              this.isLoading = false;
            }
          });
      } else {
        this.isLoading = false;
        this.workspaceService
          .saveWorkspace(this.workspaceToSave, this.workspaceParent.id)
          .subscribe({next: () => {
              this.success = true
              this.isLoading = false;
              this.isPreview = true;
              this.alertService.addAlert({ type: 'success', translationKey: "Workspace créé avec succes." })
              this.eventManager.broadcast("EVENT:WORKSPACE_FETCH");
            }, error: (response) => {
              this.isLoading = false;
              this.processError(response)
            }
          });
      }
    } else {
      this.error = true;
    }
  }

  protected addConfiguration(): void {
    if (!this.workspaceToSave.configuration) {
      this.workspaceToSave.configuration = [];
    }

    this.workspaceToSave.configuration.push({
      key: '',
      value: ''
    } as ConfigurationDTO)
  }

  protected deleteConfiguration(configurationIndex: number): void {
    if (this.workspaceToSave.configuration) {
      this.workspaceToSave.configuration.splice(configurationIndex, 1);
    }
  }

  private processError(response: HttpErrorResponse): void {
    this.error = true;
  }
}
