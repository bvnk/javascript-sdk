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
import Wallet from './Wallet';

/**
 * The Merchant model module.
 * @module model/Merchant
 * @version 1.0.1
 */
class Merchant {
    /**
     * Constructs a new <code>Merchant</code>.
     * @alias module:model/Merchant
     */
    constructor() { 
        
        Merchant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Merchant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Merchant} obj Optional instance to populate.
     * @return {module:model/Merchant} The populated <code>Merchant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Merchant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('webhookUrl')) {
                obj['webhookUrl'] = ApiClient.convertToType(data['webhookUrl'], 'String');
            }
            if (data.hasOwnProperty('autoConvertInvalidPayments')) {
                obj['autoConvertInvalidPayments'] = ApiClient.convertToType(data['autoConvertInvalidPayments'], 'Boolean');
            }
            if (data.hasOwnProperty('defaultExpiryMinutes')) {
                obj['defaultExpiryMinutes'] = ApiClient.convertToType(data['defaultExpiryMinutes'], 'Number');
            }
            if (data.hasOwnProperty('webhookVersion')) {
                obj['webhookVersion'] = ApiClient.convertToType(data['webhookVersion'], 'Number');
            }
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = Wallet.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('emailRecipients')) {
                obj['emailRecipients'] = ApiClient.convertToType(data['emailRecipients'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Merchant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Merchant</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['merchantId'] && !(typeof data['merchantId'] === 'string' || data['merchantId'] instanceof String)) {
            throw new Error("Expected the field `merchantId` to be a primitive type in the JSON string but got " + data['merchantId']);
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['webhookUrl'] && !(typeof data['webhookUrl'] === 'string' || data['webhookUrl'] instanceof String)) {
            throw new Error("Expected the field `webhookUrl` to be a primitive type in the JSON string but got " + data['webhookUrl']);
        }
        // validate the optional field `wallet`
        if (data['wallet']) { // data not null
          Wallet.validateJSON(data['wallet']);
        }
        // ensure the json data is a string
        if (data['emailRecipients'] && !(typeof data['emailRecipients'] === 'string' || data['emailRecipients'] instanceof String)) {
            throw new Error("Expected the field `emailRecipients` to be a primitive type in the JSON string but got " + data['emailRecipients']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Merchant.prototype['id'] = undefined;

/**
 * @member {String} merchantId
 */
Merchant.prototype['merchantId'] = undefined;

/**
 * @member {String} displayName
 */
Merchant.prototype['displayName'] = undefined;

/**
 * @member {String} secret
 */
Merchant.prototype['secret'] = undefined;

/**
 * @member {String} webhookUrl
 */
Merchant.prototype['webhookUrl'] = undefined;

/**
 * @member {Boolean} autoConvertInvalidPayments
 * @default true
 */
Merchant.prototype['autoConvertInvalidPayments'] = true;

/**
 * @member {Number} defaultExpiryMinutes
 */
Merchant.prototype['defaultExpiryMinutes'] = undefined;

/**
 * @member {Number} webhookVersion
 */
Merchant.prototype['webhookVersion'] = undefined;

/**
 * @member {module:model/Wallet} wallet
 */
Merchant.prototype['wallet'] = undefined;

/**
 * @member {String} emailRecipients
 */
Merchant.prototype['emailRecipients'] = undefined;






export default Merchant;

