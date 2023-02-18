import {Component, OnInit} from '@angular/core';
import {Device, UserDTO, Workspace} from "../../../../../../app/shared/api";
import {WorkspaceService} from "../service/workspace.service";
import {EventManager} from "../../../core/util/event-manager.service";
import {ConfirmationModalService} from "../../../shared/confirmation/services/confirmation-modal.service";
import {DeviceService} from "../../device/service/device.service";

type PreviewPageParams = "add-workspace" | "add-user" | "edit-workspace" | "edit-user" | "delete-device" | "delete-workspace" | "delete-user" | "delete-device";

@Component({
  selector: 'ms-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss'],
  providers: [ConfirmationModalService]
})
export class WorkspaceListComponent implements OnInit {

  currentWorkspace: Workspace = {};
  currentDevice: Device = {};
  currentUser: UserDTO = {};
  isManager = false;
  workspaces: Workspace[] = [];
  users: UserDTO[] = [];
  devices: Device[] = [];
  page: PreviewPageParams | null = null;
  isPreview = true;

  constructor(
    private workspaceService: WorkspaceService,
    private eventManager: EventManager,
    private confirmationService: ConfirmationModalService,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    this.eventManager.subscribe('EVENT:WORKSPACE_USER_FETCH', () => this.fetchUsers());
    this.eventManager.subscribe('EVENT:WORKSPACE_FETCH', () => this.fetchWorkspaces());
    this.eventManager.subscribe('EVENT:WORKSPACE_DEVICE', () => this.fetchDevices());
    this.fetchWorkspaces();
  }

  protected onChange(oneWorkspace: any): void {
    if (oneWorkspace?.id) {
      this.page = "edit-workspace";
      this.isPreview = true;
      this.currentWorkspace = oneWorkspace;
      this.fetchUserRole();
      this.fetchWorkspace(oneWorkspace.id);
    }
  }

  protected onChangeUser(oneUser: any): void {
    if (oneUser?.id) {
      this.page = "edit-user";
      this.isPreview = true;
      this.currentUser = oneUser;
    }
  }

  protected previewPage(page: PreviewPageParams, user?: UserDTO): void {
    this.page = page;
    this.isPreview = true;
    if (user) {
      this.currentUser = user;
    }
  }

  protected editPage(params: { page: PreviewPageParams, user?: UserDTO, workspace?: Workspace, device?: Device }): void {
    if (params.user) {
      this.currentUser = params.user;
    }
    if (params.workspace) {
      this.currentWorkspace = params.workspace;
    }
    if (params.device) {
      this.currentDevice = params.device;
    }
    this.page = params.page;
    this.isPreview = false;
  }

  protected deleteDevice(param: { device: Device }): void {
    if (param.device.uniqueId) {
      this.confirmationService
        .confirm(
          'Suppression du device',
          'Vous etes sur le point de supprimer le device',
          param.device.uniqueId,
          'Confirmer la suppression',
          'Annuler la suppression'
        )
        .subscribe((result) => {
          if (result && this.currentWorkspace.id && param.device.uniqueId) {
            this.deviceService.deleteDevice(this.currentWorkspace.id, param.device.uniqueId).subscribe((deleteResponse) => {
              this.eventManager.broadcast('EVENT:WORKSPACE_DEVICE');
            })
          }
        })
    }
  }

  protected deleteUser(param: { user: UserDTO }): void {
    if (param.user.id) {
      this.confirmationService
        .confirm(
          'Suppression de l\'utilisateur',
          `${'Vous etes sur le point de supprimer l\'utilisateur ' + (param.user.firstName ? param.user.firstName : '')  + ' ' + (param.user.lastName ? param.user.lastName : '')}`,
          (param.user.firstName ? param.user.firstName : ''),
          'Confirmer la suppression',
          'Annuler la suppression'
        )
        .subscribe((result) => {
          if (result && this.currentWorkspace.id && param.user.id) {
            this.workspaceService.deleteUser(this.currentWorkspace.id, param.user.id).subscribe(() => {
              this.eventManager.broadcast('EVENT:WORKSPACE_FETCH');
            })
          }
        })
    }
  }

  private fetchUserRole(): void {
    if (this.currentWorkspace.id) {
      this.workspaceService.isManager(this.currentWorkspace.id).subscribe(isManager => {
        this.isManager = isManager;
      })
    }
  }

  private fetchWorkspaces(): void {
    this.workspaceService.fetchWorkspaces().subscribe(workspaces => {
      this.workspaces = workspaces;
    })
  }

  private fetchWorkspace(id: string): void {
    this.workspaceService.searchWorkspaceById(id).subscribe(workspaces => {
      this.currentWorkspace = workspaces[0];
      this.fetchUsers();
      this.fetchDevices();
    })
  }

  private fetchUsers(): void {
    if (this.currentWorkspace.id) {
      this.workspaceService.fetchWorkspaceUsers(this.currentWorkspace.id).subscribe(users => {
        this.users = users;
        this.currentUser = {};
      })
    }
  }

  private fetchDevices(): void {
    if (this.currentWorkspace.id) {
      this.deviceService.fetchWorkspaceDevices(this.currentWorkspace.id).subscribe(devices => {
        this.devices = devices;
      })
    }
  }
}
