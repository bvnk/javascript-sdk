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
 * The CurrencyOptions model module.
 * @module model/CurrencyOptions
 * @version 1.0.1
 */
class CurrencyOptions {
    /**
     * Constructs a new <code>CurrencyOptions</code>.
     * The currency options.
     * @alias module:model/CurrencyOptions
     */
    constructor() { 
        
        CurrencyOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyOptions} obj Optional instance to populate.
     * @return {module:model/CurrencyOptions} The populated <code>CurrencyOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyOptions();

            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = ApiClient.convertToType(data['transaction'], 'String');
            }
            if (data.hasOwnProperty('explorer')) {
                obj['explorer'] = ApiClient.convertToType(data['explorer'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('confirmations')) {
                obj['confirmations'] = ApiClient.convertToType(data['confirmations'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrencyOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrencyOptions</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['transaction'] && !(typeof data['transaction'] === 'string' || data['transaction'] instanceof String)) {
            throw new Error("Expected the field `transaction` to be a primitive type in the JSON string but got " + data['transaction']);
        }
        // ensure the json data is a string
        if (data['explorer'] && !(typeof data['explorer'] === 'string' || data['explorer'] instanceof String)) {
            throw new Error("Expected the field `explorer` to be a primitive type in the JSON string but got " + data['explorer']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }

        return true;
    }


}



/**
 * View onchain transactions.
 * @member {String} transaction
 */
CurrencyOptions.prototype['transaction'] = undefined;

/**
 * The explorer to view crypto network
 * @member {String} explorer
 */
CurrencyOptions.prototype['explorer'] = undefined;

/**
 * View wallet address
 * @member {String} address
 */
CurrencyOptions.prototype['address'] = undefined;

/**
 * Number of confirmations needed.
 * @member {Number} confirmations
 */
CurrencyOptions.prototype['confirmations'] = undefined;






export default CurrencyOptions;
