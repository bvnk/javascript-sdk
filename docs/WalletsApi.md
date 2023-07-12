# BvnkApiEndpoints.WalletsApi

All URIs are relative to *https://api.sandbox.bvnk.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**walletBalanceList**](WalletsApi.md#walletBalanceList) | **GET** /api/wallet/balances | List Wallet Balances
[**walletCreate**](WalletsApi.md#walletCreate) | **POST** /api/wallet | Create Wallet
[**walletList**](WalletsApi.md#walletList) | **GET** /api/wallet | List Wallets
[**walletRead**](WalletsApi.md#walletRead) | **GET** /api/wallet/{id} | Get Wallet
[**walletTransactionReport**](WalletsApi.md#walletTransactionReport) | **GET** /api/transaction/report | Transactions Report



## walletBalanceList

> [BalanceDto] walletBalanceList(opts)

List Wallet Balances

Retrieves the balances of your wallets on platform.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.WalletsApi();
let opts = {
  'date': 2020-03-17 // String | Date at to retrieve balances.
};
apiInstance.walletBalanceList(opts, (error, data, response) => {
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
 **date** | **String**| Date at to retrieve balances. | [optional] 

### Return type

[**[BalanceDto]**](BalanceDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletCreate

> WalletDto walletCreate(opts)

Create Wallet

Creates a wallet on the BVNK platform.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.WalletsApi();
let opts = {
  'walletRequestDto': new BvnkApiEndpoints.WalletRequestDto() // WalletRequestDto | 
};
apiInstance.walletCreate(opts, (error, data, response) => {
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
 **walletRequestDto** | [**WalletRequestDto**](WalletRequestDto.md)|  | [optional] 

### Return type

[**WalletDto**](WalletDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## walletList

> [WalletDto] walletList(opts)

List Wallets

Retrieves a list of wallets on your account.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.WalletsApi();
let opts = {
  'offset': 56, // Number | Where to start fetching records.
  'max': 10 // Number | Maximum number of items in response.
};
apiInstance.walletList(opts, (error, data, response) => {
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
 **offset** | **Number**| Where to start fetching records. | [optional] 
 **max** | **Number**| Maximum number of items in response. | [optional] [default to 10]

### Return type

[**[WalletDto]**](WalletDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletRead

> WalletDto walletRead(id)

Get Wallet

Retrieves a specific wallet.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.WalletsApi();
let id = 255861; // Number | The ID of the wallet that you want to retrieve.
apiInstance.walletRead(id, (error, data, response) => {
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
 **id** | **Number**| The ID of the wallet that you want to retrieve. | [default to 255861]

### Return type

[**WalletDto**](WalletDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## walletTransactionReport

> [TransactionReportDto] walletTransactionReport(opts)

Transactions Report

Report all transactions from wallet in specified format. Report will be generated and sent to main account email in the specified format.

### Example

```javascript
import BvnkApiEndpoints from 'bvnk_api_endpoints';
let defaultClient = BvnkApiEndpoints.ApiClient.instance;
// Configure API key authorization: Hawk
let Hawk = defaultClient.authentications['Hawk'];
Hawk.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Hawk.apiKeyPrefix = 'Token';

let apiInstance = new BvnkApiEndpoints.WalletsApi();
let opts = {
  'walletId': 255861, // Number | Date at to retrieve balances.
  'fromDate': "'2022-09-17'", // String | Export range from date in format 'YYYY-MM-dd'.
  'toDate': "'2023-03-17'", // String | Export range to date in format 'YYYY-MM-dd'.
  'format': "'csv'", // String | 'json' - json format, 'csv' - csv format
  'transactionType': "transactionType_example" // String | Transaction type code
};
apiInstance.walletTransactionReport(opts, (error, data, response) => {
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
 **walletId** | **Number**| Date at to retrieve balances. | [optional] [default to 255861]
 **fromDate** | **String**| Export range from date in format &#39;YYYY-MM-dd&#39;. | [optional] [default to &#39;2022-09-17&#39;]
 **toDate** | **String**| Export range to date in format &#39;YYYY-MM-dd&#39;. | [optional] [default to &#39;2023-03-17&#39;]
 **format** | **String**| &#39;json&#39; - json format, &#39;csv&#39; - csv format | [optional] [default to &#39;csv&#39;]
 **transactionType** | **String**| Transaction type code | [optional] 

### Return type

[**[TransactionReportDto]**](TransactionReportDto.md)

### Authorization

[Hawk](../README.md#Hawk)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

