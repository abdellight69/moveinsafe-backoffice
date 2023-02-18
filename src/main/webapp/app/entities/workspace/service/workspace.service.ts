import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Device, UserDTO, UserRestrictedDTO, Workspace} from "../../../../../../app/shared/api";
import {Observable} from "rxjs";
import {ApplicationConfigService} from "../../../core/config/application-config.service";

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  constructor(private http: HttpClient,
              private applicationConfigService: ApplicationConfigService) { }

  /**
   * Save a new Workspace object in the Workspace parent  in the Backend server database.
   * @param workspace
   * @param workspaceParentId
   */
  saveWorkspace(workspace: Workspace, workspaceParentId: string): Observable<Workspace>{
    return this.http
      .put<Workspace>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces?current-workspace-id=' + workspaceParentId),
        workspace
      );
  }

  /**
   * Add a new user to a  Workspace.
   * @param workspace
   * @param workspaceParentId
   */
  addUser(user: UserDTO, workspaceId: string): Observable<UserDTO>{
    return this.http
      .put<UserDTO>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces/' + workspaceId + '/users'),
        user
      );
  }

  /**
   * Update an existing user in the Backend server database.
   * @param user
   */
  updateUser(user: UserDTO, id: string, workspaceParentId: string): Observable<UserDTO>{
    return this.http.post<UserDTO>(`${'/api/private/service/movinsafe/workspaces/' + workspaceParentId + '/users/' + id }`, user);
  }

  /**
   * Search user by email and workspace id
   * @param id
   */
  searchUserByUserAndWorkspace({ userId, workspaceId } : { userId: string, workspaceId: string}): Observable<UserDTO>{
    return this.http.get<UserDTO>('/api/private/service/movinsafe/workspaces/' + workspaceId + '/user?id=' + userId);
  }

  /**
   * Update an existing Workspace object in the Backend server database.
   * @param workspace
   */
  updateWorkspace(workspace: Workspace, id: string, workspaceParentId: string): Observable<Workspace>{
    return this.http.post<Workspace>(`${'/api/private/service/movinsafe/workspaces/' + id + '?current-workspace-id=' + workspaceParentId }`, workspace);
  }

  /**
   * Search workspace by it id
   * @param id
   */
  searchWorkspaceById(id: string): Observable<Workspace[]>{
    return this.http.get<Workspace[]>('/api/private/service/movinsafe/workspaces?workspace-id=' + id);
  }

  /**
   * Check if current user is manager of workspace
   * @param workspaceId
   */
  isManager(workspaceId: string): Observable<boolean>{
    return this.http.get<boolean>('/api/private/service/movinsafe/workspace/' + workspaceId + '/is-manager');
  }

  /**
   * Get all Workspaces for the current user
   */
  fetchWorkspaces(): Observable<Workspace[]>{
    return this.http
      .get<Workspace[]>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces')
      );
  }

  /**
   * Get all workspace Users
   */
  fetchWorkspaceUsers(id: string): Observable<UserDTO[]>{
    return this.http
      .get<UserDTO[]>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces/' + id + '/users')
      );
  }

  /**
   * Check if user is already in a given workspace
   */
  isUserInWorkspace(workspaceId: string, email: string): Observable<boolean>{
    return this.http
      .get<boolean>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspace/' + workspaceId + '/exist?email=' + email)
      );
  }

  /**
   * Delete user by it id and workspace id
   */
  deleteUser(workspaceId: string, user: string): Observable<void> {
    return this.http
      .delete<void>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspace/' + workspaceId + '/user/' + user)
      );
  }
}
