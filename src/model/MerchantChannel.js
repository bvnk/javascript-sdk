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
import AlternativeAddress from './AlternativeAddress';

/**
 * The MerchantChannel model module.
 * @module model/MerchantChannel
 * @version 1.0.1
 */
class MerchantChannel {
    /**
     * Constructs a new <code>MerchantChannel</code>.
     * @alias module:model/MerchantChannel
     */
    constructor() { 
        
        MerchantChannel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantChannel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantChannel} obj Optional instance to populate.
     * @return {module:model/MerchantChannel} The populated <code>MerchantChannel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantChannel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Number');
            }
            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('walletCurrency')) {
                obj['walletCurrency'] = ApiClient.convertToType(data['walletCurrency'], 'String');
            }
            if (data.hasOwnProperty('displayCurrency')) {
                obj['displayCurrency'] = ApiClient.convertToType(data['displayCurrency'], 'String');
            }
            if (data.hasOwnProperty('payCurrency')) {
                obj['payCurrency'] = ApiClient.convertToType(data['payCurrency'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('redirectUrl')) {
                obj['redirectUrl'] = ApiClient.convertToType(data['redirectUrl'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('alternatives')) {
                obj['alternatives'] = ApiClient.convertToType(data['alternatives'], [AlternativeAddress]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantChannel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantChannel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['merchantId'] && !(typeof data['merchantId'] === 'string' || data['merchantId'] instanceof String)) {
            throw new Error("Expected the field `merchantId` to be a primitive type in the JSON string but got " + data['merchantId']);
        }
        // ensure the json data is a string
        if (data['walletCurrency'] && !(typeof data['walletCurrency'] === 'string' || data['walletCurrency'] instanceof String)) {
            throw new Error("Expected the field `walletCurrency` to be a primitive type in the JSON string but got " + data['walletCurrency']);
        }
        // ensure the json data is a string
        if (data['displayCurrency'] && !(typeof data['displayCurrency'] === 'string' || data['displayCurrency'] instanceof String)) {
            throw new Error("Expected the field `displayCurrency` to be a primitive type in the JSON string but got " + data['displayCurrency']);
        }
        // ensure the json data is a string
        if (data['payCurrency'] && !(typeof data['payCurrency'] === 'string' || data['payCurrency'] instanceof String)) {
            throw new Error("Expected the field `payCurrency` to be a primitive type in the JSON string but got " + data['payCurrency']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['protocol'] && !(typeof data['protocol'] === 'string' || data['protocol'] instanceof String)) {
            throw new Error("Expected the field `protocol` to be a primitive type in the JSON string but got " + data['protocol']);
        }
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // ensure the json data is a string
        if (data['redirectUrl'] && !(typeof data['redirectUrl'] === 'string' || data['redirectUrl'] instanceof String)) {
            throw new Error("Expected the field `redirectUrl` to be a primitive type in the JSON string but got " + data['redirectUrl']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }
        if (data['alternatives']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['alternatives'])) {
                throw new Error("Expected the field `alternatives` to be an array in the JSON data but got " + data['alternatives']);
            }
            // validate the optional field `alternatives` (array)
            for (const item of data['alternatives']) {
                AlternativeAddress.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} id
 * @default 0
 */
MerchantChannel.prototype['id'] = 0;

/**
 * @member {Number} dateCreated
 * @default 0
 */
MerchantChannel.prototype['dateCreated'] = 0;

/**
 * @member {Number} lastUpdated
 * @default 0
 */
MerchantChannel.prototype['lastUpdated'] = 0;

/**
 * @member {String} merchantId
 */
MerchantChannel.prototype['merchantId'] = undefined;

/**
 * @member {String} walletCurrency
 */
MerchantChannel.prototype['walletCurrency'] = undefined;

/**
 * @member {String} displayCurrency
 */
MerchantChannel.prototype['displayCurrency'] = undefined;

/**
 * @member {String} payCurrency
 */
MerchantChannel.prototype['payCurrency'] = undefined;

/**
 * @member {String} address
 */
MerchantChannel.prototype['address'] = undefined;

/**
 * @member {String} tag
 */
MerchantChannel.prototype['tag'] = undefined;

/**
 * @member {String} protocol
 */
MerchantChannel.prototype['protocol'] = undefined;

/**
 * @member {String} reference
 */
MerchantChannel.prototype['reference'] = undefined;

/**
 * @member {module:model/MerchantChannel.StatusEnum} status
 */
MerchantChannel.prototype['status'] = undefined;

/**
 * @member {String} uuid
 */
MerchantChannel.prototype['uuid'] = undefined;

/**
 * @member {String} redirectUrl
 */
MerchantChannel.prototype['redirectUrl'] = undefined;

/**
 * @member {String} uri
 */
MerchantChannel.prototype['uri'] = undefined;

/**
 * @member {Array.<module:model/AlternativeAddress>} alternatives
 */
MerchantChannel.prototype['alternatives'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
MerchantChannel['StatusEnum'] = {

    /**
     * value: "OPEN"
     * @const
     */
    "OPEN": "OPEN",

    /**
     * value: "CLOSED"
     * @const
     */
    "CLOSED": "CLOSED"
};



export default MerchantChannel;
