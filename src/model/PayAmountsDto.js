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
 * The PayAmountsDto model module.
 * @module model/PayAmountsDto
 * @version 1.0.1
 */
class PayAmountsDto {
    /**
     * Constructs a new <code>PayAmountsDto</code>.
     * Contains the type of currency, amount to be paid, and amount received.
     * @alias module:model/PayAmountsDto
     */
    constructor() { 
        
        PayAmountsDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayAmountsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayAmountsDto} obj Optional instance to populate.
     * @return {module:model/PayAmountsDto} The populated <code>PayAmountsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayAmountsDto();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('actual')) {
                obj['actual'] = ApiClient.convertToType(data['actual'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayAmountsDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayAmountsDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }

        return true;
    }


}



/**
 * The currency acronym.
 * @member {String} currency
 */
PayAmountsDto.prototype['currency'] = undefined;

/**
 * The amount to be paid.
 * @member {Number} amount
 */
PayAmountsDto.prototype['amount'] = undefined;

/**
 * The actual amount received.
 * @member {Number} actual
 */
PayAmountsDto.prototype['actual'] = undefined;






export default PayAmountsDto;

