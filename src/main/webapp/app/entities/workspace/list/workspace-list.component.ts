import {Component, OnInit} from '@angular/core';
import {UserDTO, Workspace} from "../../../../../../app/shared/api";
import {WorkspaceService} from "../service/workspace.service";
import {EventManager} from "../../../core/util/event-manager.service";

@Component({
  selector: 'ms-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.scss']
})
export class WorkspaceListComponent implements OnInit {

  currentWorkspace: Workspace | null = null;
  workspaces: Workspace[] = [];
  users: UserDTO[] = [];
  page: 'add-workspace' | 'add-user' | null = null;

  constructor(
    private workspaceService: WorkspaceService,
    private eventManager: EventManager
  ) {}

  ngOnInit(): void {
    this.eventManager.subscribe('EVENT:WORKSPACE_USER_FETCH', this.fetchUsers);
    this.workspaceService.fetchWorkspaces().subscribe(workspaces => {
      this.workspaces = workspaces;
      this.currentWorkspace = workspaces[0];
      this.fetchUsers();
    })
  }

  protected fetchWorkspace(id: string): void {
    this.workspaceService.searchWorkspaceById(id).subscribe(workspaces => {
      this.currentWorkspace = workspaces[0];
      this.fetchUsers();
    })
  }

  protected onChange($event: any): void {
    const changedWorkspace = this.workspaces.find(workspace => workspace.id === $event) as Workspace;
    if (changedWorkspace.id) {
      this.fetchWorkspace(changedWorkspace.id);
    }
  }

  protected changePage(page: 'add-workspace' | 'add-user'): void {
    this.page = page;
  }

  private fetchUsers(): void {
    if (this.currentWorkspace?.id) {
      this.workspaceService.fetchWorkspaceUsers(this.currentWorkspace.id).subscribe(users => {
        this.users = users;
      })
    }
  }
}
