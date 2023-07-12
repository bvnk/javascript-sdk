# BvnkApiEndpoints.MerchantChannelPaymentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channelId** | **String** | The ID of the channel. | [optional] 
**merchantId** | **String** | The merchant ID linked to channel. | [optional] 
**merchantDisplayName** | **String** | The display name fo the merchant. | [optional] 
**reference** | **String** | The unique reference of the channel. | [optional] 
**dateCreated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] [default to 0]
**lastUpdated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] [default to 0]
**status** | **String** | The status of the channel payment. | [optional] 
**uuid** | **String** | The uuid fo the channel payment. | [optional] 
**hash** | **String** | The transaction hash of the channel payment. | [optional] 
**address** | **String** | The address of the channel. | [optional] 
**tag** | **String** | The tag of the channel. | [optional] 
**paidCurrency** | **String** | The currency of the payment. | [optional] 
**displayCurrency** | **String** | The display currency of the channel. | [optional] 
**walletCurrency** | **String** | The currency of the wallet linked to the channel. | [optional] 
**feeCurrency** | **String** | The currency of the fee taken. | [optional] 
**paidAmount** | **Number** | The amount paid to the channel. | [optional] [default to 0]
**displayAmount** | **Number** | The amount displayed of the channel payment. | [optional] [default to 0]
**walletAmount** | **Number** | The amount converted to the wallet linked to the channel. | [optional] [default to 0]
**feeAmount** | **Number** | The amount of the fee taken. | [optional] [default to 0]
**exchangeRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**displayRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**risk** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**sources** | **[String]** | The address source of the payment. | [optional] 
**networkFee** | [**NetworkFeeDto**](NetworkFeeDto.md) |  | [optional] 



## Enum: StatusEnum


* `DETECTED` (value: `"DETECTED"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `UNKNOWN` (value: `"UNKNOWN"`)




