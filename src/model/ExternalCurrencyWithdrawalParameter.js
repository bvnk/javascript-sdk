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
 * The ExternalCurrencyWithdrawalParameter model module.
 * @module model/ExternalCurrencyWithdrawalParameter
 * @version 1.0.1
 */
class ExternalCurrencyWithdrawalParameter {
    /**
     * Constructs a new <code>ExternalCurrencyWithdrawalParameter</code>.
     * @alias module:model/ExternalCurrencyWithdrawalParameter
     */
    constructor() { 
        
        ExternalCurrencyWithdrawalParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalCurrencyWithdrawalParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalCurrencyWithdrawalParameter} obj Optional instance to populate.
     * @return {module:model/ExternalCurrencyWithdrawalParameter} The populated <code>ExternalCurrencyWithdrawalParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalCurrencyWithdrawalParameter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExternalCurrencyWithdrawalParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalCurrencyWithdrawalParameter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * The ID of the external currency.
 * @member {Number} id
 */
ExternalCurrencyWithdrawalParameter.prototype['id'] = undefined;

/**
 * The code of the external currency.
 * @member {String} code
 */
ExternalCurrencyWithdrawalParameter.prototype['code'] = undefined;

/**
 * The name of the external currency.
 * @member {String} name
 */
ExternalCurrencyWithdrawalParameter.prototype['name'] = undefined;






export default ExternalCurrencyWithdrawalParameter;

