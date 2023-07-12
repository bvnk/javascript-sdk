/**
 * BVNK API Endpoints
 * The BVNK API is designed to facilitate seamless and secure transactions including payments, channels, anddigital wallet transactions.
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
import Fee from './Fee';

/**
 * The Fees model module.
 * @module model/Fees
 * @version 1.0.1
 */
class Fees {
    /**
     * Constructs a new <code>Fees</code>.
     * @alias module:model/Fees
     */
    constructor() { 
        
        Fees.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fees</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fees} obj Optional instance to populate.
     * @return {module:model/Fees} The populated <code>Fees</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fees();

            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = Fee.constructFromObject(data['percentage']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = Fee.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Fees</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Fees</code>.
     */
    static validateJSON(data) {
        // validate the optional field `percentage`
        if (data['percentage']) { // data not null
          Fee.validateJSON(data['percentage']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          Fee.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * @member {module:model/Fee} percentage
 */
Fees.prototype['percentage'] = undefined;

/**
 * @member {module:model/Fee} value
 */
Fees.prototype['value'] = undefined;






export default Fees;
