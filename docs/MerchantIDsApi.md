# BvnkApiEndpoints.MerchantIDsApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchantIdCreate**](MerchantIDsApi.md#merchantIdCreate) | **POST** /api/v1/merchant | Create Merchant ID
[**merchantIdList**](MerchantIDsApi.md#merchantIdList) | **GET** /api/v1/merchant | List Merchant IDs



## merchantIdCreate

> MerchantDto merchantIdCreate(opts)

Create Merchant ID

Generate a Merchant ID for your account to process pay-ins and pay-outs through our API.  A Merchant ID is essential as it designates the account wallet where incoming pay-ins will be settled. For instance, if a Merchant ID is associated with a EUR wallet ID, any incoming USDT payment will be automatically converted to EUR and deposited in the designated EUR wallet.  Vice versa, any outgoing USDT payment will be automatically converted and withdrawn from the designated EUR wallet.  For further information, please visit https://docs.bvnk.com/docs/creating-your-first-merchant to learn more about creating your first Merchant ID.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.MerchantIDsApi();
let opts = {
  'merchantIdCreateRequest': new BvnkApiEndpoints.MerchantIdCreateRequest() // MerchantIdCreateRequest | 
};
apiInstance.merchantIdCreate(opts, (error, data, response) => {
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
 **merchantIdCreateRequest** | [**MerchantIdCreateRequest**](MerchantIdCreateRequest.md)|  | [optional] 

### Return type

[**MerchantDto**](MerchantDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantIdList

> [MerchantDto] merchantIdList()

List Merchant IDs

Retrieves merchant IDs setup on your account.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.MerchantIDsApi();
apiInstance.merchantIdList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MerchantDto]**](MerchantDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

