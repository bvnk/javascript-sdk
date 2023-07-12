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
import DirectionDto from './DirectionDto';
import PayInDetailDto from './PayInDetailDto';
import PayOutDetailDto from './PayOutDetailDto';

/**
 * The PayRequestDto model module.
 * @module model/PayRequestDto
 * @version 1.0.1
 */
class PayRequestDto {
    /**
     * Constructs a new <code>PayRequestDto</code>.
     * The request data required to create a payment in or a payment out
     * @alias module:model/PayRequestDto
     * @param merchantId {String} Your Merchant ID. You can find it on the Merchant Details page in your account.
     * @param amount {Number} The payment amount.
     * @param currency {String} The currency acronym.
     * @param reference {String} The custom payment reference ID to tie the payment to your customer.
     * @param type {module:model/DirectionDto} 
     */
    constructor(merchantId, amount, currency, reference, type) { 
        
        PayRequestDto.initialize(this, merchantId, amount, currency, reference, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, merchantId, amount, currency, reference, type) { 
        obj['merchantId'] = merchantId || '5C8D8D78-366A-4AFB-B658-A64CE543C5DB';
        obj['amount'] = amount || 223.05;
        obj['currency'] = currency || 'EUR';
        obj['reference'] = reference || 'myUniqueRef333';
        obj['type'] = type;
    }

    /**
     * Constructs a <code>PayRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayRequestDto} obj Optional instance to populate.
     * @return {module:model/PayRequestDto} The populated <code>PayRequestDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayRequestDto();

            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('expiryMinutes')) {
                obj['expiryMinutes'] = ApiClient.convertToType(data['expiryMinutes'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('returnUrl')) {
                obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = DirectionDto.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('payInDetails')) {
                obj['payInDetails'] = PayInDetailDto.constructFromObject(data['payInDetails']);
            }
            if (data.hasOwnProperty('payOutDetails')) {
                obj['payOutDetails'] = PayOutDetailDto.constructFromObject(data['payOutDetails']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayRequestDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayRequestDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PayRequestDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['merchantId'] && !(typeof data['merchantId'] === 'string' || data['merchantId'] instanceof String)) {
            throw new Error("Expected the field `merchantId` to be a primitive type in the JSON string but got " + data['merchantId']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['returnUrl'] && !(typeof data['returnUrl'] === 'string' || data['returnUrl'] instanceof String)) {
            throw new Error("Expected the field `returnUrl` to be a primitive type in the JSON string but got " + data['returnUrl']);
        }
        // ensure the json data is a string
        if (data['reference'] && !(typeof data['reference'] === 'string' || data['reference'] instanceof String)) {
            throw new Error("Expected the field `reference` to be a primitive type in the JSON string but got " + data['reference']);
        }
        // validate the optional field `payInDetails`
        if (data['payInDetails']) { // data not null
          PayInDetailDto.validateJSON(data['payInDetails']);
        }
        // validate the optional field `payOutDetails`
        if (data['payOutDetails']) { // data not null
          PayOutDetailDto.validateJSON(data['payOutDetails']);
        }

        return true;
    }


}

PayRequestDto.RequiredProperties = ["merchantId", "amount", "currency", "reference", "type"];

/**
 * Your Merchant ID. You can find it on the Merchant Details page in your account.
 * @member {String} merchantId
 * @default '5C8D8D78-366A-4AFB-B658-A64CE543C5DB'
 */
PayRequestDto.prototype['merchantId'] = '5C8D8D78-366A-4AFB-B658-A64CE543C5DB';

/**
 * The payment amount.
 * @member {Number} amount
 * @default 223.05
 */
PayRequestDto.prototype['amount'] = 223.05;

/**
 * The time period after which payment expires.
 * @member {Number} expiryMinutes
 * @default 20
 */
PayRequestDto.prototype['expiryMinutes'] = 20;

/**
 * The currency acronym.
 * @member {String} currency
 * @default 'EUR'
 */
PayRequestDto.prototype['currency'] = 'EUR';

/**
 * The URL that the customer will be redirected to if they click 'Back to Merchant' button on the payment web page.
 * @member {String} returnUrl
 * @default 'https://my-shop.com/payment-complete?ref=xyz'
 */
PayRequestDto.prototype['returnUrl'] = 'https://my-shop.com/payment-complete?ref=xyz';

/**
 * The custom payment reference ID to tie the payment to your customer.
 * @member {String} reference
 * @default 'myUniqueRef333'
 */
PayRequestDto.prototype['reference'] = 'myUniqueRef333';

/**
 * @member {module:model/DirectionDto} type
 */
PayRequestDto.prototype['type'] = undefined;

/**
 * @member {module:model/PayInDetailDto} payInDetails
 */
PayRequestDto.prototype['payInDetails'] = undefined;

/**
 * @member {module:model/PayOutDetailDto} payOutDetails
 */
PayRequestDto.prototype['payOutDetails'] = undefined;






export default PayRequestDto;

