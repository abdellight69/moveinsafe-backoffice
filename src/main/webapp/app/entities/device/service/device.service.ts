import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Device, UserDTO, UserRestrictedDTO, Workspace} from "../../../../../../app/shared/api";
import {Observable} from "rxjs";
import {ApplicationConfigService} from "../../../core/config/application-config.service";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient,
              private applicationConfigService: ApplicationConfigService) { }

  /**
   * Get all workspace Devices
   */
  fetchWorkspaceDevices(workspaceId: string): Observable<Device[]>{
    return this.http
      .get<Device[]>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspaces/' + workspaceId + '/devices')
      );
  }

  /**
   * Delete device by it id and workspace id
   */
  deleteDevice(workspaceId: string, deviceId: string): Observable<void> {
    return this.http
      .delete<void>(
        this.applicationConfigService.getEndpointFor('/api/private/service/movinsafe/workspace/' + workspaceId + '/devices/' + deviceId)
      );
  }
}
