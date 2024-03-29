/**
 * Movinsafe
 * # Introduction  movinsafe is a tracking software. Vehicle and personal tracking. Self hosting and cloud-based solution. Real time view, reports, notifications.  With movinsafe, you can : * Manage devices and there location  Through the Movinsafe API you can, for example:  * Register new devices * Send new positions for spécifics devices * Ask traccar to send notifications  Our API is organised around REST and JSON, and uses standard HTTP response codes, verbs and authentication.  ## API versioning  Our API is accessed through an generic URL.  Any breaking changes to the API will be introduced through a new version number.  Non-breaking changes may be introduced without changing version. These may include additional fields to JSON data structures, optional parameters to API calls, new features that can be exposed through existing API calls, or new API calls.  Our API versioning uses 2 digits, such as *major.minor* (1.0, 1.1…). An increment in the major digit means that ground-breaking changes have been introduced (ex: rework on entire resources, major changes in the authentication system…).  ## Security  All endpoints require authentication.  ## Pagination  Many of our API resources use pagination. You can select whatever you want to receive using `page` and `size` parameters.  ⚠️ Most of our endpoints limit the number of returned results to **100**, even if you pass a superior `size`.  ## Errors  We use [conventional HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) to indicate the success or failure of an API request.  In general:  -   2xx codes indicate success, -   4xx codes indicate an error that failed given the information provided (e.g., a required parameter was omitted, the resource does not exist…), -   5xx codes indicate an error with Movinsafe\'s servers.  | HTTP code          | Label             | Meaning                                                                                 | |--------------------|-------------------|-----------------------------------------------------------------------------------------| | 200                | OK                | Success                                                                                 | | 201                | Created           | A resource has been created                                                             | | 202                | Accepted          | The request has been accepted for processing, but the processing has not been completed | | 400                | Bad Request       | The request was unacceptable, often due to missing a required parameter                 | | 401                | Unauthorized      | No valid API key provided                                                               | | 402                | Request Failed    | The parameters were valid but the request failed                                        | | 403                | Forbidden         | The API key doesn’t have permissions to perform the request                             | | 404                | Not Found         | The requested resource doesn’t exist                                                    | | 409                | Conflict          | The request conflicts with another request                                              | | 429                | Too Many Requests | Too many requests hit the API too quickly                                               | | 500, 502, 503, 504 | Server Errors     | Something went wrong on movinsafe\'s side                                                | 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@movinsafe.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ConfigurationDTO } from './configurationDTO';
import { Organisation } from './organisation';
import { Device } from './device';


export interface Workspace { 
    id?: string;
    name?: string;
    organisation?: Organisation;
    workspaces?: Array<Workspace>;
    configuration?: Array<ConfigurationDTO>;
    devices?: Array<Device>;
}

