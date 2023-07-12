# BvnkApiEndpoints.CurrencyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | The currency code. | [optional] 
**depositFee** | **Number** | The % fee to deposit the currency. | [optional] 
**fiat** | **Boolean** | Is a fiat currency. | [optional] [default to false]
**icon** | **String** | The icon of the currency. | [optional] 
**id** | **Number** | The ID of the currency. | [optional] 
**name** | **String** | The currency name. | [optional] 
**options** | [**CurrencyOptions**](CurrencyOptions.md) |  | [optional] 
**pricePrecision** | **Number** | The precision of decimal points for the currency. | [optional] [default to 5]
**protocols** | [**[CurrencyProtocol]**](CurrencyProtocol.md) | The alternative protocols array. | [optional] 
**quantityPrecision** | **Number** | The precision of decimal points for the currency displayed. | [optional] [default to 5]
**supportsDeposits** | **Boolean** | Is deposits for this currency supported. | [optional] [default to false]
**supportsWithdrawals** | **Boolean** | Is withdrawals for this currency supported | [optional] [default to false]
**withdrawalFee** | **Number** | The % fee to withdraw this currency. | [optional] 
**withdrawalParameters** | [**[ExternalCurrencyWithdrawalParameter]**](ExternalCurrencyWithdrawalParameter.md) | The withdrawal parameter object. | [optional] 


