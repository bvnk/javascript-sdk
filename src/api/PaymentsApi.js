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


import ApiClient from "../ApiClient";
import ClientValidationErrorDto from '../model/ClientValidationErrorDto';
import PayOutDetailDto from '../model/PayOutDetailDto';
import PayRequestDto from '../model/PayRequestDto';
import PaymentStatusDto from '../model/PaymentStatusDto';
import ServerErrorDto from '../model/ServerErrorDto';
import SummaryPaymentDto from '../model/SummaryPaymentDto';

/**
* Payments service.
* @module api/PaymentsApi
* @version 1.0.1
*/
export default class PaymentsApi {

    /**
    * Constructs a new PaymentsApi. 
    * @alias module:api/PaymentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the paymentCreate operation.
     * @callback module:api/PaymentsApi~paymentCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryPaymentDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create payment
     * Creates a payment, either type IN or type OUT.
     * @param {module:model/PayRequestDto} payRequestDto 
     * @param {module:api/PaymentsApi~paymentCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryPaymentDto}
     */
    paymentCreate(payRequestDto, callback) {
      let postBody = payRequestDto;
      // verify the required parameter 'payRequestDto' is set
      if (payRequestDto === undefined || payRequestDto === null) {
        throw new Error("Missing the required parameter 'payRequestDto' when calling paymentCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Hawk'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SummaryPaymentDto;
      return this.apiClient.callApi(
        '/api/v1/pay/summary', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentList operation.
     * @callback module:api/PaymentsApi~paymentListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SummaryPaymentDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payments
     * Retrieves a list of payments on a specific Merchant ID.
     * @param {String} merchantId The merchant ID as a UUID.
     * @param {Object} opts Optional parameters
     * @param {String} [customerReference] The customer reference.
     * @param {String} [paymentExternalId] The merchant payment uuid.
     * @param {String} [fromDate] The start date.
     * @param {String} [toDate] The end date.
     * @param {Number} [offset] Where to start fetching records.
     * @param {Number} [max] Maximum number of items in response.
     * @param {module:model/PaymentStatusDto} [status] 
     * @param {module:model/String} [order] Ordering direction.
     * @param {module:api/PaymentsApi~paymentListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SummaryPaymentDto>}
     */
    paymentList(merchantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'merchantId' is set
      if (merchantId === undefined || merchantId === null) {
        throw new Error("Missing the required parameter 'merchantId' when calling paymentList");
      }

      let pathParams = {
      };
      let queryParams = {
        'merchantId': merchantId,
        'customerReference': opts['customerReference'],
        'paymentExternalId': opts['paymentExternalId'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'offset': opts['offset'],
        'max': opts['max'],
        'status': opts['status'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Hawk'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SummaryPaymentDto];
      return this.apiClient.callApi(
        '/api/v1/pay/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentOutValidate operation.
     * @callback module:api/PaymentsApi~paymentOutValidateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate Address
     * Validates that a crypto address is correct.  Use this endpoint to validate that an address exists, is correctly formatted, and includes all the required data. This endpoint can help prevent your end users losing funds when submitting a payout.
     * @param {module:model/PayOutDetailDto} payOutDetailDto 
     * @param {module:api/PaymentsApi~paymentOutValidateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    paymentOutValidate(payOutDetailDto, callback) {
      let postBody = payOutDetailDto;
      // verify the required parameter 'payOutDetailDto' is set
      if (payOutDetailDto === undefined || payOutDetailDto === null) {
        throw new Error("Missing the required parameter 'payOutDetailDto' when calling paymentOutValidate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/pay/validate', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentRead operation.
     * @callback module:api/PaymentsApi~paymentReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryPaymentDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment
     * Retrieves details of a specific payment using the UUID of the payment.
     * @param {String} uuid The payment UUID.
     * @param {module:api/PaymentsApi~paymentReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryPaymentDto}
     */
    paymentRead(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling paymentRead");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Hawk'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SummaryPaymentDto;
      return this.apiClient.callApi(
        '/api/v1/pay/{uuid}/summary', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
