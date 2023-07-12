# BvnkApiEndpoints.MerchantChannelPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **String** |  | [optional] 
**merchantId** | **String** |  | [optional] 
**merchantDisplayName** | **String** |  | [optional] 
**reference** | **String** |  | [optional] 
**dateCreated** | **Number** |  | [optional] [default to 0]
**lastUpdated** | **Number** |  | [optional] [default to 0]
**status** | **String** |  | [optional] 
**uuid** | **String** |  | [optional] 
**hash** | **String** |  | [optional] 
**address** | **String** |  | [optional] 
**tag** | **String** |  | [optional] 
**paidCurrency** | **String** |  | [optional] 
**displayCurrency** | **String** |  | [optional] 
**walletCurrency** | **String** |  | [optional] 
**feeCurrency** | **String** |  | [optional] 
**paidAmount** | **Number** |  | [optional] [default to 0]
**displayAmount** | **Number** |  | [optional] [default to 0]
**walletAmount** | **Number** |  | [optional] [default to 0]
**feeAmount** | **Number** |  | [optional] [default to 0]
**exchangeRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**displayRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**risk** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**sources** | **[String]** |  | [optional] 
**networkFee** | [**NetworkFee**](NetworkFee.md) |  | [optional] 



## Enum: StatusEnum


* `DETECTED` (value: `"DETECTED"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




