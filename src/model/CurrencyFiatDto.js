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
 * The CurrencyFiatDto model module.
 * @module model/CurrencyFiatDto
 * @version 1.0.1
 */
class CurrencyFiatDto {
    /**
     * Constructs a new <code>CurrencyFiatDto</code>.
     * @alias module:model/CurrencyFiatDto
     */
    constructor() { 
        
        CurrencyFiatDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CurrencyFiatDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CurrencyFiatDto} obj Optional instance to populate.
     * @return {module:model/CurrencyFiatDto} The populated <code>CurrencyFiatDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CurrencyFiatDto();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('depositFee')) {
                obj['depositFee'] = ApiClient.convertToType(data['depositFee'], 'Number');
            }
            if (data.hasOwnProperty('fiat')) {
                obj['fiat'] = ApiClient.convertToType(data['fiat'], 'Boolean');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], Object);
            }
            if (data.hasOwnProperty('pricePrecision')) {
                obj['pricePrecision'] = ApiClient.convertToType(data['pricePrecision'], 'Number');
            }
            if (data.hasOwnProperty('protocols')) {
                obj['protocols'] = ApiClient.convertToType(data['protocols'], [Object]);
            }
            if (data.hasOwnProperty('quantityPrecision')) {
                obj['quantityPrecision'] = ApiClient.convertToType(data['quantityPrecision'], 'Number');
            }
            if (data.hasOwnProperty('supportsDeposits')) {
                obj['supportsDeposits'] = ApiClient.convertToType(data['supportsDeposits'], 'Boolean');
            }
            if (data.hasOwnProperty('supportsWithdrawals')) {
                obj['supportsWithdrawals'] = ApiClient.convertToType(data['supportsWithdrawals'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawalFee')) {
                obj['withdrawalFee'] = ApiClient.convertToType(data['withdrawalFee'], 'Number');
            }
            if (data.hasOwnProperty('withdrawalParameters')) {
                obj['withdrawalParameters'] = ApiClient.convertToType(data['withdrawalParameters'], [Object]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CurrencyFiatDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CurrencyFiatDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['protocols'])) {
            throw new Error("Expected the field `protocols` to be an array in the JSON data but got " + data['protocols']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['withdrawalParameters'])) {
            throw new Error("Expected the field `withdrawalParameters` to be an array in the JSON data but got " + data['withdrawalParameters']);
        }

        return true;
    }


}



/**
 * The currency code.
 * @member {String} code
 */
CurrencyFiatDto.prototype['code'] = undefined;

/**
 * The % fee to deposit the currency.
 * @member {Number} depositFee
 */
CurrencyFiatDto.prototype['depositFee'] = undefined;

/**
 * Is a fiat currency.
 * @member {Boolean} fiat
 * @default true
 */
CurrencyFiatDto.prototype['fiat'] = true;

/**
 * The icon of the currency.
 * @member {String} icon
 */
CurrencyFiatDto.prototype['icon'] = undefined;

/**
 * The ID of the currency.
 * @member {Number} id
 */
CurrencyFiatDto.prototype['id'] = undefined;

/**
 * The currency name.
 * @member {String} name
 */
CurrencyFiatDto.prototype['name'] = undefined;

/**
 * The currency options.
 * @member {Object} options
 */
CurrencyFiatDto.prototype['options'] = undefined;

/**
 * The precision of decimal points for the currency.
 * @member {Number} pricePrecision
 * @default 2
 */
CurrencyFiatDto.prototype['pricePrecision'] = 2;

/**
 * The alternative protocols array.
 * @member {Array.<Object>} protocols
 */
CurrencyFiatDto.prototype['protocols'] = undefined;

/**
 * The precision of decimal points for the currency displayed.
 * @member {Number} quantityPrecision
 * @default 2
 */
CurrencyFiatDto.prototype['quantityPrecision'] = 2;

/**
 * Is deposits for this currency supported.
 * @member {Boolean} supportsDeposits
 * @default true
 */
CurrencyFiatDto.prototype['supportsDeposits'] = true;

/**
 * Is withdrawals for this currency supported
 * @member {Boolean} supportsWithdrawals
 * @default true
 */
CurrencyFiatDto.prototype['supportsWithdrawals'] = true;

/**
 * The % fee to withdraw this currency.
 * @member {Number} withdrawalFee
 */
CurrencyFiatDto.prototype['withdrawalFee'] = undefined;

/**
 * The withdrawal parameter object.
 * @member {Array.<Object>} withdrawalParameters
 */
CurrencyFiatDto.prototype['withdrawalParameters'] = undefined;






export default CurrencyFiatDto;

