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
import TransactionReportRequestData from './TransactionReportRequestData';

/**
 * The TransactionReport model module.
 * @module model/TransactionReport
 * @version 1.0.1
 */
class TransactionReport {
    /**
     * Constructs a new <code>TransactionReport</code>.
     * @alias module:model/TransactionReport
     */
    constructor() { 
        
        TransactionReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionReport} obj Optional instance to populate.
     * @return {module:model/TransactionReport} The populated <code>TransactionReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionReport();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Number');
            }
            if (data.hasOwnProperty('expiryDate')) {
                obj['expiryDate'] = ApiClient.convertToType(data['expiryDate'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('requestData')) {
                obj['requestData'] = TransactionReportRequestData.constructFromObject(data['requestData']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `requestData`
        if (data['requestData']) { // data not null
          TransactionReportRequestData.validateJSON(data['requestData']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
TransactionReport.prototype['id'] = undefined;

/**
 * @member {String} uuid
 */
TransactionReport.prototype['uuid'] = undefined;

/**
 * @member {Number} dateCreated
 */
TransactionReport.prototype['dateCreated'] = undefined;

/**
 * @member {Number} lastUpdated
 */
TransactionReport.prototype['lastUpdated'] = undefined;

/**
 * @member {Number} expiryDate
 */
TransactionReport.prototype['expiryDate'] = undefined;

/**
 * @member {String} status
 */
TransactionReport.prototype['status'] = undefined;

/**
 * @member {String} type
 */
TransactionReport.prototype['type'] = undefined;

/**
 * @member {module:model/TransactionReportRequestData} requestData
 */
TransactionReport.prototype['requestData'] = undefined;






export default TransactionReport;
