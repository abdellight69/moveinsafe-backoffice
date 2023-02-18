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
import { Position } from './position';


export interface Alert { 
    id?: string;
    deviceUID?: number;
    type?: Alert.TypeEnum;
    isActive?: boolean;
    position?: Position;
    positions?: Array<Position>;
}
export namespace Alert {
    export type TypeEnum = 'medical' | 'sos' | 'threat' | 'flic' | 'fall_detected' | 'verticality_loss' | 'no_network_session_expired' | 'test' | 'assistance' | 'tearing' | 'loss_of_mobility' | 'fall_detection' | 'loss_of_verticality' | 'blank_zone' | 'unlisted';
    export const TypeEnum = {
        Medical: 'medical' as TypeEnum,
        Sos: 'sos' as TypeEnum,
        Threat: 'threat' as TypeEnum,
        Flic: 'flic' as TypeEnum,
        FallDetected: 'fall_detected' as TypeEnum,
        VerticalityLoss: 'verticality_loss' as TypeEnum,
        NoNetworkSessionExpired: 'no_network_session_expired' as TypeEnum,
        Test: 'test' as TypeEnum,
        Assistance: 'assistance' as TypeEnum,
        Tearing: 'tearing' as TypeEnum,
        LossOfMobility: 'loss_of_mobility' as TypeEnum,
        FallDetection: 'fall_detection' as TypeEnum,
        LossOfVerticality: 'loss_of_verticality' as TypeEnum,
        BlankZone: 'blank_zone' as TypeEnum,
        Unlisted: 'unlisted' as TypeEnum
    };
}

