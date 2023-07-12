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
import MerchantChannelDto from '../model/MerchantChannelDto';
import MerchantChannelPaymentDto from '../model/MerchantChannelPaymentDto';
import MerchantChannelRequestDto from '../model/MerchantChannelRequestDto';
import PaymentStatusDto from '../model/PaymentStatusDto';
import ServerErrorDto from '../model/ServerErrorDto';

/**
* Channels service.
* @module api/ChannelsApi
* @version 1.0.1
*/
export default class ChannelsApi {

    /**
    * Constructs a new ChannelsApi. 
    * @alias module:api/ChannelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the channelCreate operation.
     * @callback module:api/ChannelsApi~channelCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MerchantChannelDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Channel
     * Creates a channel that your end users can openly send payments to.
     * @param {Object} opts Optional parameters
     * @param {module:model/MerchantChannelRequestDto} [merchantChannelRequestDto] 
     * @param {module:api/ChannelsApi~channelCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MerchantChannelDto}
     */
    channelCreate(opts, callback) {
      opts = opts || {};
      let postBody = opts['merchantChannelRequestDto'];

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
      let returnType = MerchantChannelDto;
      return this.apiClient.callApi(
        '/api/v2/channel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the channelList operation.
     * @callback module:api/ChannelsApi~channelListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MerchantChannelDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Channels
     * Retrieves all channels related to a Merchant ID.
     * @param {String} merchantId The merchant ID that the channels belong to
     * @param {Object} opts Optional parameters
     * @param {String} [offset] Where to start fetching records.
     * @param {String} [max] Maximum number of items in response.
     * @param {module:model/PaymentStatusDto} [sort] The attribute used to sort the data
     * @param {module:model/String} [order] Ordering direction
     * @param {module:api/ChannelsApi~channelListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MerchantChannelDto>}
     */
    channelList(merchantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'merchantId' is set
      if (merchantId === undefined || merchantId === null) {
        throw new Error("Missing the required parameter 'merchantId' when calling channelList");
      }

      let pathParams = {
      };
      let queryParams = {
        'merchantId': merchantId,
        'offset': opts['offset'],
        'max': opts['max'],
        'sort': opts['sort'],
        'order': opts['order']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Hawk'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MerchantChannelDto];
      return this.apiClient.callApi(
        '/api/v2/channel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the channelPaymentList operation.
     * @callback module:api/ChannelsApi~channelPaymentListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MerchantChannelPaymentDto>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Channel Payments
     * Retrieves a list of payments to a channel on a specific Merchant ID.
     * @param {String} merchantId The Merchant ID
     * @param {Object} opts Optional parameters
     * @param {module:model/String} [status] 
     * @param {String} [fromDate] From which date to start searching.
     * @param {String} [toDate] At which date to stop searching.
     * @param {String} [offset] Where to start fetching records.
     * @param {String} [max] Maximum number of items in response.
     * @param {module:model/String} [order] Ordering direction
     * @param {String} [q] Can be UUID of the payment, reference, channel UUID, transaction hash, or wallet code.
     * @param {module:api/ChannelsApi~channelPaymentListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MerchantChannelPaymentDto>}
     */
    channelPaymentList(merchantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'merchantId' is set
      if (merchantId === undefined || merchantId === null) {
        throw new Error("Missing the required parameter 'merchantId' when calling channelPaymentList");
      }

      let pathParams = {
      };
      let queryParams = {
        'merchantId': merchantId,
        'status': opts['status'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'offset': opts['offset'],
        'max': opts['max'],
        'order': opts['order'],
        'q': opts['q']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Hawk'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MerchantChannelPaymentDto];
      return this.apiClient.callApi(
        '/api/v2/channel/payment', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the channelPaymentRead operation.
     * @callback module:api/ChannelsApi~channelPaymentReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MerchantChannelPaymentDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Channel Payment
     * Retrieves a specific payment made into a channel.
     * @param {String} uuid The UUID of the payment you are querying.
     * @param {module:api/ChannelsApi~channelPaymentReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MerchantChannelPaymentDto}
     */
    channelPaymentRead(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling channelPaymentRead");
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
      let returnType = MerchantChannelPaymentDto;
      return this.apiClient.callApi(
        '/api/v2/channel/payment/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the channelRead operation.
     * @callback module:api/ChannelsApi~channelReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MerchantChannelDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Channel
     * Retrieves a specific channel by UUID.
     * @param {String} uuid The UUID of the channel you are querying
     * @param {module:api/ChannelsApi~channelReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MerchantChannelDto}
     */
    channelRead(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling channelRead");
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
      let returnType = MerchantChannelDto;
      return this.apiClient.callApi(
        '/api/v2/channel/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}