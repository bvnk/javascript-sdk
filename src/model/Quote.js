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
import AccountMethod from './AccountMethod';
import Fees from './Fees';
import PayInInstruction from './PayInInstruction';
import PayInMethod from './PayInMethod';
import PayOutInstruction from './PayOutInstruction';
import PayOutMethod from './PayOutMethod';
import PaymentLeg from './PaymentLeg';

/**
 * The Quote model module.
 * @module model/Quote
 * @version 1.0.1
 */
class Quote {
    /**
     * Constructs a new <code>Quote</code>.
     * @alias module:model/Quote
     */
    constructor() { 
        
        Quote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Quote} obj Optional instance to populate.
     * @return {module:model/Quote} The populated <code>Quote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Quote();

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
                obj['payInLegs'] = ApiClient.convertToType(data['payInLegs'], [PaymentLeg]);
            }
            if (data.hasOwnProperty('payInMethod')) {
                obj['payInMethod'] = PayInMethod.constructFromObject(data['payInMethod']);
            }
            if (data.hasOwnProperty('payOutMethod')) {
                obj['payOutMethod'] = PayOutMethod.constructFromObject(data['payOutMethod']);
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('payOutInstruction')) {
                obj['payOutInstruction'] = PayOutInstruction.constructFromObject(data['payOutInstruction']);
            }
            if (data.hasOwnProperty('payInInstruction')) {
                obj['payInInstruction'] = PayInInstruction.constructFromObject(data['payInInstruction']);
            }
            if (data.hasOwnProperty('usePayInMethod')) {
                obj['usePayInMethod'] = AccountMethod.constructFromObject(data['usePayInMethod']);
            }
            if (data.hasOwnProperty('usePayOutMethod')) {
                obj['usePayOutMethod'] = AccountMethod.constructFromObject(data['usePayOutMethod']);
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
                obj['fees'] = Fees.constructFromObject(data['fees']);
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
     * Validates the JSON data with respect to <code>Quote</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Quote</code>.
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
                PaymentLeg.validateJSON(item);
            };
        }
        // validate the optional field `payInMethod`
        if (data['payInMethod']) { // data not null
          PayInMethod.validateJSON(data['payInMethod']);
        }
        // validate the optional field `payOutMethod`
        if (data['payOutMethod']) { // data not null
          PayOutMethod.validateJSON(data['payOutMethod']);
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }
        // validate the optional field `payOutInstruction`
        if (data['payOutInstruction']) { // data not null
          PayOutInstruction.validateJSON(data['payOutInstruction']);
        }
        // validate the optional field `payInInstruction`
        if (data['payInInstruction']) { // data not null
          PayInInstruction.validateJSON(data['payInInstruction']);
        }
        // validate the optional field `usePayInMethod`
        if (data['usePayInMethod']) { // data not null
          AccountMethod.validateJSON(data['usePayInMethod']);
        }
        // validate the optional field `usePayOutMethod`
        if (data['usePayOutMethod']) { // data not null
          AccountMethod.validateJSON(data['usePayOutMethod']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `fees`
        if (data['fees']) { // data not null
          Fees.validateJSON(data['fees']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
Quote.prototype['id'] = undefined;

/**
 * @member {String} from
 */
Quote.prototype['from'] = undefined;

/**
 * @member {String} to
 */
Quote.prototype['to'] = undefined;

/**
 * @member {Number} amountIn
 */
Quote.prototype['amountIn'] = undefined;

/**
 * @member {Number} amountDue
 */
Quote.prototype['amountDue'] = undefined;

/**
 * @member {Number} amountOut
 */
Quote.prototype['amountOut'] = undefined;

/**
 * @member {Number} price
 */
Quote.prototype['price'] = undefined;

/**
 * @member {module:model/Quote.QuoteStatusEnum} quoteStatus
 */
Quote.prototype['quoteStatus'] = undefined;

/**
 * @member {module:model/Quote.PaymentStatusEnum} paymentStatus
 */
Quote.prototype['paymentStatus'] = undefined;

/**
 * @member {Number} acceptanceExpiryDate
 */
Quote.prototype['acceptanceExpiryDate'] = undefined;

/**
 * @member {Number} acceptanceDate
 */
Quote.prototype['acceptanceDate'] = undefined;

/**
 * @member {Number} paymentExpiryDate
 */
Quote.prototype['paymentExpiryDate'] = undefined;

/**
 * @member {Number} paymentReceiptDate
 */
Quote.prototype['paymentReceiptDate'] = undefined;

/**
 * @member {Array.<module:model/PaymentLeg>} payInLegs
 */
Quote.prototype['payInLegs'] = undefined;

/**
 * @member {module:model/PayInMethod} payInMethod
 */
Quote.prototype['payInMethod'] = undefined;

/**
 * @member {module:model/PayOutMethod} payOutMethod
 */
Quote.prototype['payOutMethod'] = undefined;

/**
 * @member {String} uuid
 */
Quote.prototype['uuid'] = undefined;

/**
 * @member {module:model/PayOutInstruction} payOutInstruction
 */
Quote.prototype['payOutInstruction'] = undefined;

/**
 * @member {module:model/PayInInstruction} payInInstruction
 */
Quote.prototype['payInInstruction'] = undefined;

/**
 * @member {module:model/AccountMethod} usePayInMethod
 */
Quote.prototype['usePayInMethod'] = undefined;

/**
 * @member {module:model/AccountMethod} usePayOutMethod
 */
Quote.prototype['usePayOutMethod'] = undefined;

/**
 * @member {Number} fee
 */
Quote.prototype['fee'] = undefined;

/**
 * @member {Number} processingFee
 */
Quote.prototype['processingFee'] = undefined;

/**
 * @member {module:model/Quote.TypeEnum} type
 */
Quote.prototype['type'] = undefined;

/**
 * @member {Number} netPrice
 */
Quote.prototype['netPrice'] = undefined;

/**
 * @member {Number} grossPrice
 */
Quote.prototype['grossPrice'] = undefined;

/**
 * @member {Number} amountInGross
 */
Quote.prototype['amountInGross'] = undefined;

/**
 * @member {Number} amountInNet
 */
Quote.prototype['amountInNet'] = undefined;

/**
 * @member {module:model/Fees} fees
 */
Quote.prototype['fees'] = undefined;

/**
 * @member {Number} dateCreated
 */
Quote.prototype['dateCreated'] = undefined;

/**
 * @member {Number} lastUpdated
 */
Quote.prototype['lastUpdated'] = undefined;





/**
 * Allowed values for the <code>quoteStatus</code> property.
 * @enum {String}
 * @readonly
 */
Quote['QuoteStatusEnum'] = {

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
Quote['PaymentStatusEnum'] = {

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
Quote['TypeEnum'] = {

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



export default Quote;

