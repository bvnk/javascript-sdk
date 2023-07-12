# BvnkApiEndpoints.PaymentsApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentCreate**](PaymentsApi.md#paymentCreate) | **POST** /api/v1/pay/summary | Create payment
[**paymentList**](PaymentsApi.md#paymentList) | **GET** /api/v1/pay/summary | List Payments
[**paymentOutValidate**](PaymentsApi.md#paymentOutValidate) | **PUT** /api/v1/pay/validate | Validate Address
[**paymentRead**](PaymentsApi.md#paymentRead) | **GET** /api/v1/pay/{uuid}/summary | Get Payment



## paymentCreate

> SummaryPaymentDto paymentCreate(payRequestDto)

Create payment

Creates a payment, either type IN or type OUT.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.PaymentsApi();
let payRequestDto = new BvnkApiEndpoints.PayRequestDto(); // PayRequestDto | 
apiInstance.paymentCreate(payRequestDto, (error, data, response) => {
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
 **payRequestDto** | [**PayRequestDto**](PayRequestDto.md)|  | 

### Return type

[**SummaryPaymentDto**](SummaryPaymentDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentList

> [SummaryPaymentDto] paymentList(merchantId, opts)

List Payments

Retrieves a list of payments on a specific Merchant ID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.PaymentsApi();
let merchantId = "'5C8D8D78-366A-4AFB-B658-A64CE543C5DB'"; // String | The merchant ID as a UUID.
let opts = {
  'customerReference': REF123, // String | The customer reference.
  'paymentExternalId': 5C8D8D78-366A-4AFB-B658-A64CE543C5DB, // String | The merchant payment uuid.
  'fromDate': 2023-03-30, // String | The start date.
  'toDate': 2023-03-30, // String | The end date.
  'offset': 0, // Number | Where to start fetching records.
  'max': 20, // Number | Maximum number of items in response.
  'status': new BvnkApiEndpoints.PaymentStatusDto(), // PaymentStatusDto | 
  'order': asc // String | Ordering direction.
};
apiInstance.paymentList(merchantId, opts, (error, data, response) => {
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
 **merchantId** | **String**| The merchant ID as a UUID. | [default to &#39;5C8D8D78-366A-4AFB-B658-A64CE543C5DB&#39;]
 **customerReference** | **String**| The customer reference. | [optional] 
 **paymentExternalId** | **String**| The merchant payment uuid. | [optional] 
 **fromDate** | **String**| The start date. | [optional] 
 **toDate** | **String**| The end date. | [optional] 
 **offset** | **Number**| Where to start fetching records. | [optional] 
 **max** | **Number**| Maximum number of items in response. | [optional] 
 **status** | [**PaymentStatusDto**](.md)|  | [optional] 
 **order** | **String**| Ordering direction. | [optional] 

### Return type

[**[SummaryPaymentDto]**](SummaryPaymentDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentOutValidate

> paymentOutValidate(payOutDetailDto)

Validate Address

Validates that a crypto address is correct.  Use this endpoint to validate that an address exists, is correctly formatted, and includes all the required data. This endpoint can help prevent your end users losing funds when submitting a payout.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';

let apiInstance = new BvnkApiEndpoints.PaymentsApi();
let payOutDetailDto = new BvnkApiEndpoints.PayOutDetailDto(); // PayOutDetailDto | 
apiInstance.paymentOutValidate(payOutDetailDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payOutDetailDto** | [**PayOutDetailDto**](PayOutDetailDto.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymentRead

> SummaryPaymentDto paymentRead(uuid)

Get Payment

Retrieves details of a specific payment using the UUID of the payment.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.PaymentsApi();
let uuid = "'5C8D8D78-366A-4AFB-B658-A64CE543C5DB'"; // String | The payment UUID.
apiInstance.paymentRead(uuid, (error, data, response) => {
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
 **uuid** | **String**| The payment UUID. | [default to &#39;5C8D8D78-366A-4AFB-B658-A64CE543C5DB&#39;]

### Return type

[**SummaryPaymentDto**](SummaryPaymentDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

