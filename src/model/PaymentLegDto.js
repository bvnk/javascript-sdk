/**
 * BVNK API Endpoints
 * The BVNK API is designed to facilitate seamless and secure transactions including payments, channels, and digital wallet transactions.
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PaymentLegDto model module.
 * @module model/PaymentLegDto
 * @version 1.0.1
 */
class PaymentLegDto {
    /**
     * Constructs a new <code>PaymentLegDto</code>.
     * @alias module:model/PaymentLegDto
     */
    constructor() { 
        
        PaymentLegDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentLegDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentLegDto} obj Optional instance to populate.
     * @return {module:model/PaymentLegDto} The populated <code>PaymentLegDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentLegDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Number');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentLegDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentLegDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * The ID of the payment.
 * @member {Number} id
 */
PaymentLegDto.prototype['id'] = undefined;

/**
 * The amount of the payment.
 * @member {Number} amount
 */
PaymentLegDto.prototype['amount'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} dateCreated
 */
PaymentLegDto.prototype['dateCreated'] = undefined;

/**
 * The reference of the payment.
 * @member {String} reference
 */
PaymentLegDto.prototype['reference'] = undefined;

/**
 * The currency of the payment.
 * @member {String} currency
 */
PaymentLegDto.prototype['currency'] = undefined;






export default PaymentLegDto;
