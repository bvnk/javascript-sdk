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
import AlternativeAddressDto from './AlternativeAddressDto';

/**
 * The CryptoAddressDto model module.
 * @module model/CryptoAddressDto
 * @version 1.0.1
 */
class CryptoAddressDto {
    /**
     * Constructs a new <code>CryptoAddressDto</code>.
     * Payment address details
     * @alias module:model/CryptoAddressDto
     */
    constructor() { 
        
        CryptoAddressDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CryptoAddressDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CryptoAddressDto} obj Optional instance to populate.
     * @return {module:model/CryptoAddressDto} The populated <code>CryptoAddressDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CryptoAddressDto();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('protocol')) {
                obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
            if (data.hasOwnProperty('alternatives')) {
                obj['alternatives'] = ApiClient.convertToType(data['alternatives'], [AlternativeAddressDto]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CryptoAddressDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CryptoAddressDto</code>.
     */
    static validateJSON(data) {
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
                AlternativeAddressDto.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The crypto address to send funds to
 * @member {String} address
 */
CryptoAddressDto.prototype['address'] = undefined;

/**
 * This is a payment destination tag. This fields isn't null when the paidCurrency currency value is XRP.
 * @member {String} tag
 */
CryptoAddressDto.prototype['tag'] = undefined;

/**
 * The protocol behind a currency, 'ERC20' or 'TRC20'.
 * @member {String} protocol
 */
CryptoAddressDto.prototype['protocol'] = undefined;

/**
 * The destination address URI for QR code
 * @member {String} uri
 */
CryptoAddressDto.prototype['uri'] = undefined;

/**
 * The list of non-default addresses for other tokens
 * @member {Array.<module:model/AlternativeAddressDto>} alternatives
 */
CryptoAddressDto.prototype['alternatives'] = undefined;






export default CryptoAddressDto;
