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
import { Address } from './address';
import { Organisation } from './organisation';
import { Device } from './device';


export interface UserDTO { 
    id?: string;
    role?: UserDTO.RoleEnum;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    server?: string;
    isActivated?: boolean;
    langKey?: string;
    passwordConfirmation?: string;
    statusCode?: number;
    status?: string;
    device?: Device;
    authorities?: Array<string>;
    gesmansysServer?: string;
    organisation?: Organisation;
    address?: Address;
}
export namespace UserDTO {
    export type RoleEnum = 'manager' | 'member';
    export const RoleEnum = {
        Manager: 'manager' as RoleEnum,
        Member: 'member' as RoleEnum
    };
}

