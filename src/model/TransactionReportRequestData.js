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

/**
 * The TransactionReportRequestData model module.
 * @module model/TransactionReportRequestData
 * @version 1.0.1
 */
class TransactionReportRequestData {
    /**
     * Constructs a new <code>TransactionReportRequestData</code>.
     * @alias module:model/TransactionReportRequestData
     */
    constructor() { 
        
        TransactionReportRequestData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionReportRequestData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionReportRequestData} obj Optional instance to populate.
     * @return {module:model/TransactionReportRequestData} The populated <code>TransactionReportRequestData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionReportRequestData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('externalProcessing')) {
                obj['externalProcessing'] = ApiClient.convertToType(data['externalProcessing'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'Number');
            }
            if (data.hasOwnProperty('transactionType')) {
                obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
            }
            if (data.hasOwnProperty('fromDate')) {
                obj['fromDate'] = ApiClient.convertToType(data['fromDate'], 'String');
            }
            if (data.hasOwnProperty('toDate')) {
                obj['toDate'] = ApiClient.convertToType(data['toDate'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('languageTag')) {
                obj['languageTag'] = ApiClient.convertToType(data['languageTag'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'Number');
            }
            if (data.hasOwnProperty('accountName')) {
                obj['accountName'] = ApiClient.convertToType(data['accountName'], 'String');
            }
            if (data.hasOwnProperty('include')) {
                obj['include'] = ApiClient.convertToType(data['include'], 'String');
            }
            if (data.hasOwnProperty('exclude')) {
                obj['exclude'] = ApiClient.convertToType(data['exclude'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionReportRequestData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionReportRequestData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['externalProcessing'] && !(typeof data['externalProcessing'] === 'string' || data['externalProcessing'] instanceof String)) {
            throw new Error("Expected the field `externalProcessing` to be a primitive type in the JSON string but got " + data['externalProcessing']);
        }
        // ensure the json data is a string
        if (data['transactionType'] && !(typeof data['transactionType'] === 'string' || data['transactionType'] instanceof String)) {
            throw new Error("Expected the field `transactionType` to be a primitive type in the JSON string but got " + data['transactionType']);
        }
        // ensure the json data is a string
        if (data['fromDate'] && !(typeof data['fromDate'] === 'string' || data['fromDate'] instanceof String)) {
            throw new Error("Expected the field `fromDate` to be a primitive type in the JSON string but got " + data['fromDate']);
        }
        // ensure the json data is a string
        if (data['toDate'] && !(typeof data['toDate'] === 'string' || data['toDate'] instanceof String)) {
            throw new Error("Expected the field `toDate` to be a primitive type in the JSON string but got " + data['toDate']);
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['languageTag'] && !(typeof data['languageTag'] === 'string' || data['languageTag'] instanceof String)) {
            throw new Error("Expected the field `languageTag` to be a primitive type in the JSON string but got " + data['languageTag']);
        }
        // ensure the json data is a string
        if (data['accountName'] && !(typeof data['accountName'] === 'string' || data['accountName'] instanceof String)) {
            throw new Error("Expected the field `accountName` to be a primitive type in the JSON string but got " + data['accountName']);
        }
        // ensure the json data is a string
        if (data['include'] && !(typeof data['include'] === 'string' || data['include'] instanceof String)) {
            throw new Error("Expected the field `include` to be a primitive type in the JSON string but got " + data['include']);
        }
        // ensure the json data is a string
        if (data['exclude'] && !(typeof data['exclude'] === 'string' || data['exclude'] instanceof String)) {
            throw new Error("Expected the field `exclude` to be a primitive type in the JSON string but got " + data['exclude']);
        }

        return true;
    }


}



/**
 * @member {String} type
 */
TransactionReportRequestData.prototype['type'] = undefined;

/**
 * @member {String} externalProcessing
 */
TransactionReportRequestData.prototype['externalProcessing'] = undefined;

/**
 * @member {Number} walletId
 */
TransactionReportRequestData.prototype['walletId'] = undefined;

/**
 * @member {String} transactionType
 */
TransactionReportRequestData.prototype['transactionType'] = undefined;

/**
 * @member {String} fromDate
 */
TransactionReportRequestData.prototype['fromDate'] = undefined;

/**
 * @member {String} toDate
 */
TransactionReportRequestData.prototype['toDate'] = undefined;

/**
 * @member {String} format
 */
TransactionReportRequestData.prototype['format'] = undefined;

/**
 * @member {String} languageTag
 */
TransactionReportRequestData.prototype['languageTag'] = undefined;

/**
 * @member {Number} category
 */
TransactionReportRequestData.prototype['category'] = undefined;

/**
 * @member {String} accountName
 */
TransactionReportRequestData.prototype['accountName'] = undefined;

/**
 * @member {String} include
 */
TransactionReportRequestData.prototype['include'] = undefined;

/**
 * @member {String} exclude
 */
TransactionReportRequestData.prototype['exclude'] = undefined;






export default TransactionReportRequestData;

