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

  import { Device } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



    @Injectable({
    providedIn: 'root'
    })
    export class DeviceQueryResourceService {

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
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public getDevice(workspaceId: string, deviceId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Device>;
    public getDevice(workspaceId: string, deviceId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Device>>;
    public getDevice(workspaceId: string, deviceId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Device>>;
    public getDevice(workspaceId: string, deviceId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling getDevice.');
        }
        if (deviceId === null || deviceId === undefined) {
        throw new Error('Required parameter deviceId was null or undefined when calling getDevice.');
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


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.get<Device>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices/${encodeURIComponent(String(deviceId))}`,
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
    * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
    * @param reportProgress flag to report request and response progress.
    */
    public getDevices(workspaceId: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Array<Device>>;
    public getDevices(workspaceId: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Array<Device>>>;
    public getDevices(workspaceId: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Array<Device>>>;
    public getDevices(workspaceId: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
        throw new Error('Required parameter workspaceId was null or undefined when calling getDevices.');
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


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if(httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('text'))) {
            responseType_ = 'text';
        }
        if (httpHeaderAcceptSelected && (httpHeaderAcceptSelected.startsWith('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') || httpHeaderAcceptSelected.startsWith('application/zip')) || (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('application/pdf'))) {
          responseType_ = 'blob';
        }

        return this.httpClient.get<Array<Device>>(`${this.configuration.basePath}/api/private/service/movinsafe/workspace/${encodeURIComponent(String(workspaceId))}/devices`,
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
