# BvnkApiEndpoints.TradingAndConversionsApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quoteAccept**](TradingAndConversionsApi.md#quoteAccept) | **PUT** /api/v1/quote/accept/{uuid} | Accept Quote
[**quoteCreate**](TradingAndConversionsApi.md#quoteCreate) | **POST** /api/v1/quote | Create Quote
[**quoteList**](TradingAndConversionsApi.md#quoteList) | **GET** /api/v1/quote/{merchantId} | List Quotes
[**quoteRead**](TradingAndConversionsApi.md#quoteRead) | **GET** /api/v1/quote/{uuid} | Get Quote



## quoteAccept

> AcceptedQuoteDto quoteAccept(uuid)

Accept Quote

Executes a quote.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.TradingAndConversionsApi();
let uuid = "'5dc4e061-31c6-4b96-8c4d-0ea984aece0b'"; // String | The quote UUID you are accepting.
apiInstance.quoteAccept(uuid, (error, data, response) => {
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
 **uuid** | **String**| The quote UUID you are accepting. | [default to &#39;5dc4e061-31c6-4b96-8c4d-0ea984aece0b&#39;]

### Return type

[**AcceptedQuoteDto**](AcceptedQuoteDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quoteCreate

> QuoteDto quoteCreate(opts)

Create Quote

Creates a quote to convert between wallets.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.TradingAndConversionsApi();
let opts = {
  'estimate': false, // Boolean | Create estimate quote
  'quoteRequestDto': new BvnkApiEndpoints.QuoteRequestDto() // QuoteRequestDto | 
};
apiInstance.quoteCreate(opts, (error, data, response) => {
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
 **estimate** | **Boolean**| Create estimate quote | [optional] [default to false]
 **quoteRequestDto** | [**QuoteRequestDto**](QuoteRequestDto.md)|  | [optional] 

### Return type

[**QuoteDto**](QuoteDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## quoteList

> [QuoteDto] quoteList(merchantId)

List Quotes

Retrieves all quotes on a specific Merchant ID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.TradingAndConversionsApi();
let merchantId = "'0a12a214-1619-43fa-9be1-0029f6a440a0'"; // String | Merchant ID you are retrieving quotes from.
apiInstance.quoteList(merchantId, (error, data, response) => {
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
 **merchantId** | **String**| Merchant ID you are retrieving quotes from. | [default to &#39;0a12a214-1619-43fa-9be1-0029f6a440a0&#39;]

### Return type

[**[QuoteDto]**](QuoteDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## quoteRead

> QuoteDto quoteRead(uuid)

Get Quote

Retrieves a specific quote.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.TradingAndConversionsApi();
let uuid = "'0a12a214-1619-43fa-9be1-0029f6a440a0'"; // String | UUID of the quote you are retrieving.
apiInstance.quoteRead(uuid, (error, data, response) => {
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
 **uuid** | **String**| UUID of the quote you are retrieving. | [default to &#39;0a12a214-1619-43fa-9be1-0029f6a440a0&#39;]

### Return type

[**QuoteDto**](QuoteDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

