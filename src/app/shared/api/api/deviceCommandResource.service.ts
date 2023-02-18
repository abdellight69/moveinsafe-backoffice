/**
 * Movinsafe API
 * Movinsafe API documentation
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

  import { Alert } from '../model/models';
  import { Device } from '../model/models';
  import { Position } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



    @Injectable({
    providedIn: 'root'
    })
    export class DeviceCommandResourceService {

  protected basePath = 'http://localhost:8080';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
  if (configuration) {
  this.configuration = configuration;
  }
  if (typeof this.configuration.basePath !== 'string') {
  if (typeof basePath !== 'string') {
  basePath = this.basePath;
  }
  this.configuration.basePath = basePath;
  }
  this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }


  private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
  if (typeof value === "object" && value instanceof Date === false) {
  httpParams = this.addToHttpParamsRecursive(httpParams, value);
  } else {
  httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
  }
  return httpParams;
  }

  private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
  if (value == null) {
  return httpParams;
  }

  if (typeof value === "object") {
    if (Array.isArray(value)) {
    (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
    } else if (value instanceof Date) {
    if (key != null) {
    httpParams = httpParams.append(key,
    (value as Date).toISOString().substr(0, 10));
    } else {
    throw Error("key may not be null if value is Date");
    }
            } else {
    Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
    httpParams, value[k], key != null ? `${key}.${k}` : k));
    }
  } else if (key != null) {
  httpParams = httpParams.append(key, value);
  } else {
  throw Error("key may not be null if value is not object or array");
  }
  return httpParams;
  }

    /**
        * @param workspaceId 
        * @param deviceId 
        * @param alert 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public addAlert(workspaceId: string, deviceId: string, alert: Alert, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Alert>;
    public addAlert(workspaceId: string, deviceId: string, alert: Alert, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Alert>>;
    public addAlert(workspaceId: string, deviceId: string, alert: Alert, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Alert>>;
    public addAlert(workspaceId: string, deviceId: string, alert: Alert, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling addAlert.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling addAlert.');
        }
        if (alert === null || alert === undefined) {
        throw new Error('Required parameter alert was null or undefined when calling addAlert.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json',
        'application/problem+json'
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }

      
        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
    headers = headers.set('Content-Type', httpContentTypeSelected);
    }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.put<Alert>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}/alert`,
    alert,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

    /**
        * @param workspaceId 
        * @param device 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public addDevice(workspaceId: string, device: Device, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Device>;
    public addDevice(workspaceId: string, device: Device, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Device>>;
    public addDevice(workspaceId: string, device: Device, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Device>>;
    public addDevice(workspaceId: string, device: Device, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling addDevice.');
        }
        if (device === null || device === undefined) {
        throw new Error('Required parameter device was null or undefined when calling addDevice.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json',
        'application/problem+json'
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }

      
        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
    headers = headers.set('Content-Type', httpContentTypeSelected);
    }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.put<Device>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices`,
    device,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

    /**
        * @param workspaceId 
        * @param deviceId 
        * @param position 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public addPosition(workspaceId: string, deviceId: string, position: Position, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public addPosition(workspaceId: string, deviceId: string, position: Position, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public addPosition(workspaceId: string, deviceId: string, position: Position, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public addPosition(workspaceId: string, deviceId: string, position: Position, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling addPosition.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling addPosition.');
        }
        if (position === null || position === undefined) {
        throw new Error('Required parameter position was null or undefined when calling addPosition.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }

      
        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
    headers = headers.set('Content-Type', httpContentTypeSelected);
    }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.put<any>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}/positions`,
    position,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

    /**
        * @param workspaceId 
        * @param deviceId 
        * @param alertId 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public cancelAlert(workspaceId: string, deviceId: string, alertId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public cancelAlert(workspaceId: string, deviceId: string, alertId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public cancelAlert(workspaceId: string, deviceId: string, alertId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public cancelAlert(workspaceId: string, deviceId: string, alertId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling cancelAlert.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling cancelAlert.');
        }
        if (alertId === null || alertId === undefined) {
        throw new Error('Required parameter alertId was null or undefined when calling cancelAlert.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}/alert/${encodeURIComponent(String(alertId))}`,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

    /**
        * @param workspaceId 
        * @param deviceId 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public deleteDevice(workspaceId: string, deviceId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public deleteDevice(workspaceId: string, deviceId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public deleteDevice(workspaceId: string, deviceId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public deleteDevice(workspaceId: string, deviceId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling deleteDevice.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling deleteDevice.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.delete<any>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}`,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

    /**
        * @param workspaceId 
        * @param deviceId 
        * @param device 
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public updateDevice(workspaceId: string, deviceId: string, device: Device, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Device>;
    public updateDevice(workspaceId: string, deviceId: string, device: Device, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Device>>;
    public updateDevice(workspaceId: string, deviceId: string, device: Device, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Device>>;
    public updateDevice(workspaceId: string, deviceId: string, device: Device, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling updateDevice.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling updateDevice.');
        }
        if (device === null || device === undefined) {
        throw new Error('Required parameter device was null or undefined when calling updateDevice.');
        }

      let headers = this.defaultHeaders;

      let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
      if (httpHeaderAcceptSelected === undefined) {
      // to determine the Accept header
      const httpHeaderAccepts: string[] = [
        'application/json',
        'application/problem+json'
      ];
      httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      }
      if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
      }

      
        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
    headers = headers.set('Content-Type', httpContentTypeSelected);
    }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.post<Device>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}`,
    device,
          {
            responseType: <any>responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
                  }
          );
          }

}
