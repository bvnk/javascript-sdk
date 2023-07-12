# BvnkApiEndpoints.GatewayTransactionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dateCreated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**dateConfirmed** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**hash** | **String** | Transaction hash. | [optional] 
**amount** | **Number** | The payment amount. | [optional] 
**risk** | **Object** |  | [optional] 
**networkFeeCurrency** | **String** | The currency acronym. | [optional] 
**networkFeeAmount** | **Number** | The network fee amount. | [optional] 
**sources** | **[String]** | The list of source addresses, only applicable if payment in. | [optional] 
**displayRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**exchangeRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 


