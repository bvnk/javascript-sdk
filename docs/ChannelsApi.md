# BvnkApiEndpoints.ChannelsApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelCreate**](ChannelsApi.md#channelCreate) | **POST** /api/v2/channel | Create Channel
[**channelList**](ChannelsApi.md#channelList) | **GET** /api/v2/channel | List Channels
[**channelPaymentList**](ChannelsApi.md#channelPaymentList) | **GET** /api/v2/channel/payment | List Channel Payments
[**channelPaymentRead**](ChannelsApi.md#channelPaymentRead) | **GET** /api/v2/channel/payment/{uuid} | Get Channel Payment
[**channelRead**](ChannelsApi.md#channelRead) | **GET** /api/v2/channel/{uuid} | Get Channel



## channelCreate

> MerchantChannelDto channelCreate(opts)

Create Channel

Creates a channel that your end users can openly send payments to.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.ChannelsApi();
let opts = {
  'merchantChannelRequestDto': new BvnkApiEndpoints.MerchantChannelRequestDto() // MerchantChannelRequestDto | 
};
apiInstance.channelCreate(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantChannelRequestDto** | [**MerchantChannelRequestDto**](MerchantChannelRequestDto.md)|  | [optional] 

### Return type

[**MerchantChannelDto**](MerchantChannelDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## channelList

> [MerchantChannelDto] channelList(merchantId, opts)

List Channels

Retrieves all channels related to a Merchant ID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.ChannelsApi();
let merchantId = "'c02153ae-8ac8-4222-80e8-b2b2af85bd78'"; // String | The merchant ID that the channels belong to
let opts = {
  'offset': 0, // String | Where to start fetching records.
  'max': 10, // String | Maximum number of items in response.
  'sort': new BvnkApiEndpoints.PaymentStatusDto(), // PaymentStatusDto | The attribute used to sort the data
  'order': "order_example" // String | Ordering direction
};
apiInstance.channelList(merchantId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| The merchant ID that the channels belong to | [default to &#39;c02153ae-8ac8-4222-80e8-b2b2af85bd78&#39;]
 **offset** | **String**| Where to start fetching records. | [optional] 
 **max** | **String**| Maximum number of items in response. | [optional] 
 **sort** | [**PaymentStatusDto**](.md)| The attribute used to sort the data | [optional] 
 **order** | **String**| Ordering direction | [optional] 

### Return type

[**[MerchantChannelDto]**](MerchantChannelDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## channelPaymentList

> [MerchantChannelPaymentDto] channelPaymentList(merchantId, opts)

List Channel Payments

Retrieves a list of payments to a channel on a specific Merchant ID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.ChannelsApi();
let merchantId = "'c02153ae-8ac8-4222-80e8-b2b2af85bd78'"; // String | The Merchant ID
let opts = {
  'status': COMPLETE, // String | 
  'fromDate': 2023-03-05, // String | From which date to start searching.
  'toDate': 2023-05-03, // String | At which date to stop searching.
  'offset': 0, // String | Where to start fetching records.
  'max': 10, // String | Maximum number of items in response.
  'order': asc, // String | Ordering direction
  'q': "q_example" // String | Can be UUID of the payment, reference, channel UUID, transaction hash, or wallet code.
};
apiInstance.channelPaymentList(merchantId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| The Merchant ID | [default to &#39;c02153ae-8ac8-4222-80e8-b2b2af85bd78&#39;]
 **status** | **String**|  | [optional] 
 **fromDate** | **String**| From which date to start searching. | [optional] 
 **toDate** | **String**| At which date to stop searching. | [optional] 
 **offset** | **String**| Where to start fetching records. | [optional] 
 **max** | **String**| Maximum number of items in response. | [optional] 
 **order** | **String**| Ordering direction | [optional] 
 **q** | **String**| Can be UUID of the payment, reference, channel UUID, transaction hash, or wallet code. | [optional] 

### Return type

[**[MerchantChannelPaymentDto]**](MerchantChannelPaymentDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## channelPaymentRead

> MerchantChannelPaymentDto channelPaymentRead(uuid)

Get Channel Payment

Retrieves a specific payment made into a channel.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.ChannelsApi();
let uuid = "'c0dc9c14-0312-4a6b-a1a3-a6dcebdcc8a4'"; // String | The UUID of the payment you are querying.
apiInstance.channelPaymentRead(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The UUID of the payment you are querying. | [default to &#39;c0dc9c14-0312-4a6b-a1a3-a6dcebdcc8a4&#39;]

### Return type

[**MerchantChannelPaymentDto**](MerchantChannelPaymentDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## channelRead

> MerchantChannelDto channelRead(uuid)

Get Channel

Retrieves a specific channel by UUID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.ChannelsApi();
let uuid = "'9d1f67f2-a647-404b-9b02-247c77be81d0'"; // String | The UUID of the channel you are querying
apiInstance.channelRead(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The UUID of the channel you are querying | [default to &#39;9d1f67f2-a647-404b-9b02-247c77be81d0&#39;]

### Return type

[**MerchantChannelDto**](MerchantChannelDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

