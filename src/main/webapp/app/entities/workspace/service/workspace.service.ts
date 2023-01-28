import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserDTO, UserRestrictedDTO, Workspace} from "../../../../../../app/shared/api";
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
  addUser(user: UserDTO, workspaceId: string): Observable<UserRestrictedDTO>{
    return this.http
      .put<UserDTO>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces/' + workspaceId + '/users'),
        user
      );
  }

  /**
   * Update an existing Workspace object in the Backend server database.
   * @param workspace
   */
  updateWorkspace(workspace: Workspace, id: string, workspaceParentId: string): Observable<Workspace>{
    return this.http.put<Workspace>(`${'/api/private/service/movinsafe/workspaces/' + id + '?current-workspace-id=' + workspaceParentId }`, workspace);
  }

  /**
   * Search workspace by it id
   * @param id
   */
  searchWorkspaceById(id: string): Observable<Workspace[]>{
    return this.http.get<Workspace[]>('/api/private/service/movinsafe/workspaces?workspace-id=' + id);
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
}
