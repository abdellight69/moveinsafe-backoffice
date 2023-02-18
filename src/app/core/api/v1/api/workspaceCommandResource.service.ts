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

import { UserDTO } from '../model/models';
import { Workspace } from '../model/models';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class WorkspaceCommandResourceService {

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
     * @param userDTO 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUser(workspaceId: string, userDTO: UserDTO, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<UserDTO>;
    public addUser(workspaceId: string, userDTO: UserDTO, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<UserDTO>>;
    public addUser(workspaceId: string, userDTO: UserDTO, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<UserDTO>>;
    public addUser(workspaceId: string, userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling addUser.');
        }
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling addUser.');
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

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<UserDTO>(`${this.configuration.basePath}/api/private/service/movinsafe/workspaces/${encodeURIComponent(String(workspaceId))}/users`,
            userDTO,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param workspaceId 
     * @param token 
     * @param userDTO 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addUserFromExternal(workspaceId: string, token: string, userDTO: UserDTO, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<UserDTO>;
    public addUserFromExternal(workspaceId: string, token: string, userDTO: UserDTO, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<UserDTO>>;
    public addUserFromExternal(workspaceId: string, token: string, userDTO: UserDTO, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<UserDTO>>;
    public addUserFromExternal(workspaceId: string, token: string, userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling addUserFromExternal.');
        }
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling addUserFromExternal.');
        }
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling addUserFromExternal.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (token !== undefined && token !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>token, 'token');
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

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<UserDTO>(`${this.configuration.basePath}/api/public/service/movinsafe/workspaces/${encodeURIComponent(String(workspaceId))}/users`,
            userDTO,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param workspace 
     * @param currentWorkspaceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addWorkspace(workspace: Workspace, currentWorkspaceId?: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Workspace>;
    public addWorkspace(workspace: Workspace, currentWorkspaceId?: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Workspace>>;
    public addWorkspace(workspace: Workspace, currentWorkspaceId?: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Workspace>>;
    public addWorkspace(workspace: Workspace, currentWorkspaceId?: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspace === null || workspace === undefined) {
            throw new Error('Required parameter workspace was null or undefined when calling addWorkspace.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (currentWorkspaceId !== undefined && currentWorkspaceId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>currentWorkspaceId, 'current-workspace-id');
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

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<Workspace>(`${this.configuration.basePath}/api/private/service/movinsafe/workspaces`,
            workspace,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param workspaceId 
     * @param userId 
     * @param userDTO 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateUser(workspaceId: string, userId: string, userDTO: UserDTO, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<any>;
    public updateUser(workspaceId: string, userId: string, userDTO: UserDTO, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpResponse<any>>;
    public updateUser(workspaceId: string, userId: string, userDTO: UserDTO, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: undefined}): Observable<HttpEvent<any>>;
    public updateUser(workspaceId: string, userId: string, userDTO: UserDTO, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: undefined}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling updateUser.');
        }
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling updateUser.');
        }
        if (userDTO === null || userDTO === undefined) {
            throw new Error('Required parameter userDTO was null or undefined when calling updateUser.');
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

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/api/private/service/movinsafe/workspaces/${encodeURIComponent(String(workspaceId))}/users/${encodeURIComponent(String(userId))}`,
            userDTO,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param workspaceId 
     * @param currentWorkspaceId 
     * @param workspace 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWorkspace(workspaceId: string, currentWorkspaceId: string, workspace: Workspace, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<Workspace>;
    public updateWorkspace(workspaceId: string, currentWorkspaceId: string, workspace: Workspace, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpResponse<Workspace>>;
    public updateWorkspace(workspaceId: string, currentWorkspaceId: string, workspace: Workspace, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<HttpEvent<Workspace>>;
    public updateWorkspace(workspaceId: string, currentWorkspaceId: string, workspace: Workspace, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | 'application/problem+json'}): Observable<any> {
        if (workspaceId === null || workspaceId === undefined) {
            throw new Error('Required parameter workspaceId was null or undefined when calling updateWorkspace.');
        }
        if (currentWorkspaceId === null || currentWorkspaceId === undefined) {
            throw new Error('Required parameter currentWorkspaceId was null or undefined when calling updateWorkspace.');
        }
        if (workspace === null || workspace === undefined) {
            throw new Error('Required parameter workspace was null or undefined when calling updateWorkspace.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (currentWorkspaceId !== undefined && currentWorkspaceId !== null) {
          queryParameters = this.addToHttpParams(queryParameters,
            <any>currentWorkspaceId, 'current-workspace-id');
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

        let responseType: 'text' | 'json' = 'json';
        if(httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<Workspace>(`${this.configuration.basePath}/api/private/service/movinsafe/workspaces/${encodeURIComponent(String(workspaceId))}`,
            workspace,
            {
                params: queryParameters,
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
