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
* Enum class DirectionDto.
* @enum {}
* @readonly
*/
export default class DirectionDto {
    
        /**
         * value: "IN"
         * @const
         */
        "IN" = "IN";

    
        /**
         * value: "OUT"
         * @const
         */
        "OUT" = "OUT";

    

    /**
    * Returns a <code>DirectionDto</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DirectionDto} The enum <code>DirectionDto</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

