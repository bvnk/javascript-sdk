# BvnkApiEndpoints.CurrenciesApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listCurrenciesCrypto**](CurrenciesApi.md#listCurrenciesCrypto) | **GET** /api/currency/crypto | List Crypto Currencies
[**listCurrenciesDeposit**](CurrenciesApi.md#listCurrenciesDeposit) | **GET** /api/currency/deposit | List Wallet Currencies
[**listCurrenciesFiat**](CurrenciesApi.md#listCurrenciesFiat) | **GET** /api/currency/fiat | List Fiat Currencies



## listCurrenciesCrypto

> [CurrencyDto] listCurrenciesCrypto(opts)

List Crypto Currencies

Retrieves a list of all cryptocurrencies available on the BVNK platform. This list represents cryptocurrencies that end users can select whilst making a payment.  For sandbox, only Ethereum (ETH) is fully functional.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';

let apiInstance = new BvnkApiEndpoints.CurrenciesApi();
let opts = {
  'offset': 0, // Number | Where to start fetching records.
  'max': 200, // Number | Maximum number of items in response.
  'allowDeposits': false // Boolean | Only list currencies that allow deposits.
};
apiInstance.listCurrenciesCrypto(opts, (error, data, response) => {
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
 **offset** | **Number**| Where to start fetching records. | [optional] [default to 0]
 **max** | **Number**| Maximum number of items in response. | [optional] [default to 200]
 **allowDeposits** | **Boolean**| Only list currencies that allow deposits. | [optional] [default to false]

### Return type

[**[CurrencyDto]**](CurrencyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCurrenciesDeposit

> [CurrencyDto] listCurrenciesDeposit(opts)

List Wallet Currencies

These are the currencies that can be used to create a new wallet.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';

let apiInstance = new BvnkApiEndpoints.CurrenciesApi();
let opts = {
  'offset': 0, // Number | Where to start fetching records.
  'max': 200 // Number | Maximum number of items in response.
};
apiInstance.listCurrenciesDeposit(opts, (error, data, response) => {
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
 **offset** | **Number**| Where to start fetching records. | [optional] [default to 0]
 **max** | **Number**| Maximum number of items in response. | [optional] [default to 200]

### Return type

[**[CurrencyDto]**](CurrencyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCurrenciesFiat

> [CurrencyFiatDto] listCurrenciesFiat(opts)

List Fiat Currencies

Retrieves a list of all display fiat currencies available on BVNK&#39;s Crypto Payments API. This list refers to currencies merchants can display on a payment page to an end user. It does not represent the list of currencies that can be held on the platform in wallets.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';

let apiInstance = new BvnkApiEndpoints.CurrenciesApi();
let opts = {
  'offset': 0, // Number | Where to start fetching records.
  'max': 200 // Number | Maximum number of items in response.
};
apiInstance.listCurrenciesFiat(opts, (error, data, response) => {
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
 **offset** | **Number**| Where to start fetching records. | [optional] [default to 0]
 **max** | **Number**| Maximum number of items in response. | [optional] [default to 200]

### Return type

[**[CurrencyFiatDto]**](CurrencyFiatDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

