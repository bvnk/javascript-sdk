# BvnkApiEndpoints.SummaryPaymentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | The unique identifier for the merchant payment. | [optional] 
**merchantDisplayName** | **String** | The display name for the merchant payment. | [optional] 
**merchantId** | **String** | The Merchant ID. You can find it on the Merchant Details page in your account. | [optional] 
**dateCreated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**expiryDate** | **Number** | The date and time, encoded into UNIX epoch timestamps | [optional] 
**quoteExpiryDate** | **Number** | The date and time, encoded into UNIX epoch timestamps | [optional] 
**acceptanceExpiryDate** | **Number** | The date and time, encoded into UNIX epoch timestamps | [optional] 
**quoteStatus** | **String** |  | [optional] 
**reference** | **String** | The custom payment reference ID to tie the payment to your customer. | [optional] 
**type** | [**DirectionDto**](DirectionDto.md) |  | [optional] 
**subType** | **String** | The payment sub type | [optional] [default to &#39;merchantPayIn&#39;]
**status** | [**PaymentStatusDto**](PaymentStatusDto.md) |  | [optional] 
**displayCurrency** | [**PayAmountsDto**](PayAmountsDto.md) |  | [optional] 
**walletCurrency** | [**PayAmountsDto**](PayAmountsDto.md) |  | [optional] 
**paidCurrency** | [**PayAmountsDto**](PayAmountsDto.md) |  | [optional] 
**feeCurrency** | [**PayAmountsDto**](PayAmountsDto.md) |  | [optional] 
**displayRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**exchangeRate** | [**ExchangeRateDto**](ExchangeRateDto.md) |  | [optional] 
**address** | [**CryptoAddressDto**](CryptoAddressDto.md) |  | [optional] 
**returnUrl** | **String** | The URL that the customer will be redirected to if they click &#39;Back to Merchant&#39; button on the payment web page. | [optional] 
**redirectUrl** | **String** | The URL to the payment page that you redirect your customers to. | [optional] 
**transactions** | [**[GatewayTransactionDto]**](GatewayTransactionDto.md) |  | [optional] 
**refund** | **Object** | The payment this object is a refund of. This should reference the pay in that this refund was created for. | [optional] 
**refunds** | **[Object]** | Refunds that have been requested for this payment. This should reference the refund payout for this pay in. | [optional] 



## Enum: SubTypeEnum


* `merchantPayIn` (value: `"merchantPayIn"`)

* `merchantPayOut` (value: `"merchantPayOut"`)

* `merchantRefund` (value: `"merchantRefund"`)




