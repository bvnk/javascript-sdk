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
 * The MerchantChannelRequest model module.
 * @module model/MerchantChannelRequest
 * @version 1.0.1
 */
class MerchantChannelRequest {
    /**
     * Constructs a new <code>MerchantChannelRequest</code>.
     * @alias module:model/MerchantChannelRequest
     * @param merchantId {String} The merchant ID that you are creating the channel on.
     * @param payCurrency {String} Cryptocurrency code that the channel will operate on.
     * @param displayCurrency {String} The currency which pricing will be displayed to the end user in (can be the same as payCurrency, or can be different).
     * @param reference {String} An external reference for the channel that your customer will see.
     */
    constructor(merchantId, payCurrency, displayCurrency, reference) { 
        
        MerchantChannelRequest.initialize(this, merchantId, payCurrency, displayCurrency, reference);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchantId, payCurrency, displayCurrency, reference) { 
        obj['merchantId'] = merchantId || '0a12a214-1619-43fa-9be1-0029f6a440a0';
        obj['payCurrency'] = payCurrency || 'ETH';
        obj['displayCurrency'] = displayCurrency || 'EUR';
        obj['reference'] = reference || 'c1b933d5-3354-4f83-a05f-0b53f1be85f2';
    }

    /**
     * Constructs a <code>MerchantChannelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantChannelRequest} obj Optional instance to populate.
     * @return {module:model/MerchantChannelRequest} The populated <code>MerchantChannelRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantChannelRequest();

            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('payCurrency')) {
                obj['payCurrency'] = ApiClient.convertToType(data['payCurrency'], 'String');
            }
            if (data.hasOwnProperty('displayCurrency')) {
                obj['displayCurrency'] = ApiClient.convertToType(data['displayCurrency'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantChannelRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantChannelRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MerchantChannelRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['merchantId'] && !(typeof data['merchantId'] === 'string' || data['merchantId'] instanceof String)) {
            throw new Error("Expected the field `merchantId` to be a primitive type in the JSON string but got " + data['merchantId']);
        }
        // ensure the json data is a string
        if (data['payCurrency'] && !(typeof data['payCurrency'] === 'string' || data['payCurrency'] instanceof String)) {
            throw new Error("Expected the field `payCurrency` to be a primitive type in the JSON string but got " + data['payCurrency']);
        }
        // ensure the json data is a string
        if (data['displayCurrency'] && !(typeof data['displayCurrency'] === 'string' || data['displayCurrency'] instanceof String)) {
            throw new Error("Expected the field `displayCurrency` to be a primitive type in the JSON string but got " + data['displayCurrency']);
        }
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }

        return true;
    }


}

MerchantChannelRequest.RequiredProperties = ["merchantId", "payCurrency", "displayCurrency", "reference"];

/**
 * The merchant ID that you are creating the channel on.
 * @member {String} merchantId
 * @default '0a12a214-1619-43fa-9be1-0029f6a440a0'
 */
MerchantChannelRequest.prototype['merchantId'] = '0a12a214-1619-43fa-9be1-0029f6a440a0';

/**
 * Cryptocurrency code that the channel will operate on.
 * @member {String} payCurrency
 * @default 'ETH'
 */
MerchantChannelRequest.prototype['payCurrency'] = 'ETH';

/**
 * The currency which pricing will be displayed to the end user in (can be the same as payCurrency, or can be different).
 * @member {String} displayCurrency
 * @default 'EUR'
 */
MerchantChannelRequest.prototype['displayCurrency'] = 'EUR';

/**
 * An external reference for the channel that your customer will see.
 * @member {String} reference
 * @default 'c1b933d5-3354-4f83-a05f-0b53f1be85f2'
 */
MerchantChannelRequest.prototype['reference'] = 'c1b933d5-3354-4f83-a05f-0b53f1be85f2';






export default MerchantChannelRequest;
