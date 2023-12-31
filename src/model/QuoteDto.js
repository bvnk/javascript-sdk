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
import AccountMethodDto from './AccountMethodDto';
import FeesDto from './FeesDto';
import PayInInstructionDto from './PayInInstructionDto';
import PayInMethodDto from './PayInMethodDto';
import PayOutInstructionDto from './PayOutInstructionDto';
import PayOutMethodDto from './PayOutMethodDto';
import PaymentLegDto from './PaymentLegDto';

/**
 * The QuoteDto model module.
 * @module model/QuoteDto
 * @version 1.0.1
 */
class QuoteDto {
    /**
     * Constructs a new <code>QuoteDto</code>.
     * @alias module:model/QuoteDto
     */
    constructor() { 
        
        QuoteDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuoteDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuoteDto} obj Optional instance to populate.
     * @return {module:model/QuoteDto} The populated <code>QuoteDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuoteDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('amountIn')) {
                obj['amountIn'] = ApiClient.convertToType(data['amountIn'], 'Number');
            }
            if (data.hasOwnProperty('amountDue')) {
                obj['amountDue'] = ApiClient.convertToType(data['amountDue'], 'Number');
            }
            if (data.hasOwnProperty('amountOut')) {
                obj['amountOut'] = ApiClient.convertToType(data['amountOut'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quoteStatus')) {
                obj['quoteStatus'] = ApiClient.convertToType(data['quoteStatus'], 'String');
            }
            if (data.hasOwnProperty('paymentStatus')) {
                obj['paymentStatus'] = ApiClient.convertToType(data['paymentStatus'], 'String');
            }
            if (data.hasOwnProperty('acceptanceExpiryDate')) {
                obj['acceptanceExpiryDate'] = ApiClient.convertToType(data['acceptanceExpiryDate'], 'Number');
            }
            if (data.hasOwnProperty('acceptanceDate')) {
                obj['acceptanceDate'] = ApiClient.convertToType(data['acceptanceDate'], 'Number');
            }
            if (data.hasOwnProperty('paymentExpiryDate')) {
                obj['paymentExpiryDate'] = ApiClient.convertToType(data['paymentExpiryDate'], 'Number');
            }
            if (data.hasOwnProperty('paymentReceiptDate')) {
                obj['paymentReceiptDate'] = ApiClient.convertToType(data['paymentReceiptDate'], 'Number');
            }
            if (data.hasOwnProperty('payInLegs')) {
                obj['payInLegs'] = ApiClient.convertToType(data['payInLegs'], [PaymentLegDto]);
            }
            if (data.hasOwnProperty('payInMethod')) {
                obj['payInMethod'] = PayInMethodDto.constructFromObject(data['payInMethod']);
            }
            if (data.hasOwnProperty('payOutMethod')) {
                obj['payOutMethod'] = PayOutMethodDto.constructFromObject(data['payOutMethod']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('payOutInstruction')) {
                obj['payOutInstruction'] = PayOutInstructionDto.constructFromObject(data['payOutInstruction']);
            }
            if (data.hasOwnProperty('payInInstruction')) {
                obj['payInInstruction'] = PayInInstructionDto.constructFromObject(data['payInInstruction']);
            }
            if (data.hasOwnProperty('usePayInMethod')) {
                obj['usePayInMethod'] = AccountMethodDto.constructFromObject(data['usePayInMethod']);
            }
            if (data.hasOwnProperty('usePayOutMethod')) {
                obj['usePayOutMethod'] = AccountMethodDto.constructFromObject(data['usePayOutMethod']);
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = ApiClient.convertToType(data['fee'], 'Number');
            }
            if (data.hasOwnProperty('processingFee')) {
                obj['processingFee'] = ApiClient.convertToType(data['processingFee'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('netPrice')) {
                obj['netPrice'] = ApiClient.convertToType(data['netPrice'], 'Number');
            }
            if (data.hasOwnProperty('grossPrice')) {
                obj['grossPrice'] = ApiClient.convertToType(data['grossPrice'], 'Number');
            }
            if (data.hasOwnProperty('amountInGross')) {
                obj['amountInGross'] = ApiClient.convertToType(data['amountInGross'], 'Number');
            }
            if (data.hasOwnProperty('amountInNet')) {
                obj['amountInNet'] = ApiClient.convertToType(data['amountInNet'], 'Number');
            }
            if (data.hasOwnProperty('fees')) {
                obj['fees'] = FeesDto.constructFromObject(data['fees']);
            }
            if (data.hasOwnProperty('dateCreated')) {
                obj['dateCreated'] = ApiClient.convertToType(data['dateCreated'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdated')) {
                obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuoteDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuoteDto</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }
        // ensure the json data is a string
        if (data['quoteStatus'] && !(typeof data['quoteStatus'] === 'string' || data['quoteStatus'] instanceof String)) {
            throw new Error("Expected the field `quoteStatus` to be a primitive type in the JSON string but got " + data['quoteStatus']);
        }
        // ensure the json data is a string
        if (data['paymentStatus'] && !(typeof data['paymentStatus'] === 'string' || data['paymentStatus'] instanceof String)) {
            throw new Error("Expected the field `paymentStatus` to be a primitive type in the JSON string but got " + data['paymentStatus']);
        }
        if (data['payInLegs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payInLegs'])) {
                throw new Error("Expected the field `payInLegs` to be an array in the JSON data but got " + data['payInLegs']);
            }
            // validate the optional field `payInLegs` (array)
            for (const item of data['payInLegs']) {
                PaymentLegDto.validateJSON(item);
            };
        }
        // validate the optional field `payInMethod`
        if (data['payInMethod']) { // data not null
          PayInMethodDto.validateJSON(data['payInMethod']);
        }
        // validate the optional field `payOutMethod`
        if (data['payOutMethod']) { // data not null
          PayOutMethodDto.validateJSON(data['payOutMethod']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // validate the optional field `payOutInstruction`
        if (data['payOutInstruction']) { // data not null
          PayOutInstructionDto.validateJSON(data['payOutInstruction']);
        }
        // validate the optional field `payInInstruction`
        if (data['payInInstruction']) { // data not null
          PayInInstructionDto.validateJSON(data['payInInstruction']);
        }
        // validate the optional field `usePayInMethod`
        if (data['usePayInMethod']) { // data not null
          AccountMethodDto.validateJSON(data['usePayInMethod']);
        }
        // validate the optional field `usePayOutMethod`
        if (data['usePayOutMethod']) { // data not null
          AccountMethodDto.validateJSON(data['usePayOutMethod']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `fees`
        if (data['fees']) { // data not null
          FeesDto.validateJSON(data['fees']);
        }

        return true;
    }


}



/**
 * The ID of the quote.
 * @member {Number} id
 */
QuoteDto.prototype['id'] = undefined;

/**
 * The currency to convert from.
 * @member {String} from
 */
QuoteDto.prototype['from'] = undefined;

/**
 * The currency to convert to.
 * @member {String} to
 */
QuoteDto.prototype['to'] = undefined;

/**
 * The amount converted to.
 * @member {Number} amountIn
 */
QuoteDto.prototype['amountIn'] = undefined;

/**
 * The amount due to be converted.
 * @member {Number} amountDue
 */
QuoteDto.prototype['amountDue'] = undefined;

/**
 * The amount being converted out.
 * @member {Number} amountOut
 */
QuoteDto.prototype['amountOut'] = undefined;

/**
 * The price quoted.
 * @member {Number} price
 */
QuoteDto.prototype['price'] = undefined;

/**
 * The status of the quote.
 * @member {module:model/QuoteDto.QuoteStatusEnum} quoteStatus
 */
QuoteDto.prototype['quoteStatus'] = undefined;

/**
 * The payment status.
 * @member {module:model/QuoteDto.PaymentStatusEnum} paymentStatus
 */
QuoteDto.prototype['paymentStatus'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} acceptanceExpiryDate
 */
QuoteDto.prototype['acceptanceExpiryDate'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} acceptanceDate
 */
QuoteDto.prototype['acceptanceDate'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} paymentExpiryDate
 */
QuoteDto.prototype['paymentExpiryDate'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} paymentReceiptDate
 */
QuoteDto.prototype['paymentReceiptDate'] = undefined;

/**
 * @member {Array.<module:model/PaymentLegDto>} payInLegs
 */
QuoteDto.prototype['payInLegs'] = undefined;

/**
 * @member {module:model/PayInMethodDto} payInMethod
 */
QuoteDto.prototype['payInMethod'] = undefined;

/**
 * @member {module:model/PayOutMethodDto} payOutMethod
 */
QuoteDto.prototype['payOutMethod'] = undefined;

/**
 * The UUID of the quote.
 * @member {String} uuid
 */
QuoteDto.prototype['uuid'] = undefined;

/**
 * @member {module:model/PayOutInstructionDto} payOutInstruction
 */
QuoteDto.prototype['payOutInstruction'] = undefined;

/**
 * @member {module:model/PayInInstructionDto} payInInstruction
 */
QuoteDto.prototype['payInInstruction'] = undefined;

/**
 * @member {module:model/AccountMethodDto} usePayInMethod
 */
QuoteDto.prototype['usePayInMethod'] = undefined;

/**
 * @member {module:model/AccountMethodDto} usePayOutMethod
 */
QuoteDto.prototype['usePayOutMethod'] = undefined;

/**
 * The fee for the quote.
 * @member {Number} fee
 */
QuoteDto.prototype['fee'] = undefined;

/**
 * The processing fee.
 * @member {Number} processingFee
 */
QuoteDto.prototype['processingFee'] = undefined;

/**
 * The type of quote.
 * @member {module:model/QuoteDto.TypeEnum} type
 */
QuoteDto.prototype['type'] = undefined;

/**
 * The net price fo the quote.
 * @member {Number} netPrice
 */
QuoteDto.prototype['netPrice'] = undefined;

/**
 * The gross price of the quote.
 * @member {Number} grossPrice
 */
QuoteDto.prototype['grossPrice'] = undefined;

/**
 * The price of the quote in gross.
 * @member {Number} amountInGross
 */
QuoteDto.prototype['amountInGross'] = undefined;

/**
 * The price of the quote in net.
 * @member {Number} amountInNet
 */
QuoteDto.prototype['amountInNet'] = undefined;

/**
 * @member {module:model/FeesDto} fees
 */
QuoteDto.prototype['fees'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} dateCreated
 */
QuoteDto.prototype['dateCreated'] = undefined;

/**
 * The date and time, encoded into UNIX epoch timestamps.
 * @member {Number} lastUpdated
 */
QuoteDto.prototype['lastUpdated'] = undefined;





/**
 * Allowed values for the <code>quoteStatus</code> property.
 * @enum {String}
 * @readonly
 */
QuoteDto['QuoteStatusEnum'] = {

    /**
     * value: "ESTIMATE"
     * @const
     */
    "ESTIMATE": "ESTIMATE",

    /**
     * value: "TEMPLATE"
     * @const
     */
    "TEMPLATE": "TEMPLATE",

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "ACCEPTED"
     * @const
     */
    "ACCEPTED": "ACCEPTED",

    /**
     * value: "PAYMENT_IN_RECEIVED"
     * @const
     */
    "PAYMENT_IN_RECEIVED": "PAYMENT_IN_RECEIVED",

    /**
     * value: "PAYMENT_IN_SEEN"
     * @const
     */
    "PAYMENT_IN_SEEN": "PAYMENT_IN_SEEN",

    /**
     * value: "PAYMENT_IN_FAILED"
     * @const
     */
    "PAYMENT_IN_FAILED": "PAYMENT_IN_FAILED",

    /**
     * value: "FRAUD_CHECK_PENDING"
     * @const
     */
    "FRAUD_CHECK_PENDING": "FRAUD_CHECK_PENDING",

    /**
     * value: "FRAUD_CHECK_FAILED"
     * @const
     */
    "FRAUD_CHECK_FAILED": "FRAUD_CHECK_FAILED",

    /**
     * value: "PAYMENT_OUT_PENDING"
     * @const
     */
    "PAYMENT_OUT_PENDING": "PAYMENT_OUT_PENDING",

    /**
     * value: "PAYMENT_OUT_PROCESSED"
     * @const
     */
    "PAYMENT_OUT_PROCESSED": "PAYMENT_OUT_PROCESSED",

    /**
     * value: "PAYMENT_OUT_USED"
     * @const
     */
    "PAYMENT_OUT_USED": "PAYMENT_OUT_USED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",

    /**
     * value: "CONVERSION_FAILED"
     * @const
     */
    "CONVERSION_FAILED": "CONVERSION_FAILED",

    /**
     * value: "PAYMENT_OUT_FAILED"
     * @const
     */
    "PAYMENT_OUT_FAILED": "PAYMENT_OUT_FAILED",

    /**
     * value: "LOCKED"
     * @const
     */
    "LOCKED": "LOCKED",

    /**
     * value: "REFUNDED"
     * @const
     */
    "REFUNDED": "REFUNDED"
};


/**
 * Allowed values for the <code>paymentStatus</code> property.
 * @enum {String}
 * @readonly
 */
QuoteDto['PaymentStatusEnum'] = {

    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",

    /**
     * value: "SEEN"
     * @const
     */
    "SEEN": "SEEN",

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "FRAUD_PENDING"
     * @const
     */
    "FRAUD_PENDING": "FRAUD_PENDING",

    /**
     * value: "FRAUD_PENDING_MANUAL_REVIEW"
     * @const
     */
    "FRAUD_PENDING_MANUAL_REVIEW": "FRAUD_PENDING_MANUAL_REVIEW",

    /**
     * value: "FRAUD_FAILED"
     * @const
     */
    "FRAUD_FAILED": "FRAUD_FAILED",

    /**
     * value: "REFUND_PENDING"
     * @const
     */
    "REFUND_PENDING": "REFUND_PENDING",

    /**
     * value: "REFUNDED"
     * @const
     */
    "REFUNDED": "REFUNDED",

    /**
     * value: "MANUAL_SUCCESS"
     * @const
     */
    "MANUAL_SUCCESS": "MANUAL_SUCCESS",

    /**
     * value: "REFUND_FAILED"
     * @const
     */
    "REFUND_FAILED": "REFUND_FAILED"
};


/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
QuoteDto['TypeEnum'] = {

    /**
     * value: "FIXED"
     * @const
     */
    "FIXED": "FIXED",

    /**
     * value: "MARKET"
     * @const
     */
    "MARKET": "MARKET"
};



export default QuoteDto;

