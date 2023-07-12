# BvnkApiEndpoints.QuoteDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the quote. | [optional] 
**from** | **String** | The currency to convert from. | [optional] 
**to** | **String** | The currency to convert to. | [optional] 
**amountIn** | **Number** | The amount converted to. | [optional] 
**amountDue** | **Number** | The amount due to be converted. | [optional] 
**amountOut** | **Number** | The amount being converted out. | [optional] 
**price** | **Number** | The price quoted. | [optional] 
**quoteStatus** | **String** | The status of the quote. | [optional] 
**paymentStatus** | **String** | The payment status. | [optional] 
**acceptanceExpiryDate** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**acceptanceDate** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**paymentExpiryDate** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**paymentReceiptDate** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**payInLegs** | [**[PaymentLegDto]**](PaymentLegDto.md) |  | [optional] 
**payInMethod** | [**PayInMethodDto**](PayInMethodDto.md) |  | [optional] 
**payOutMethod** | [**PayOutMethodDto**](PayOutMethodDto.md) |  | [optional] 
**uuid** | **String** | The UUID of the quote. | [optional] 
**payOutInstruction** | [**PayOutInstructionDto**](PayOutInstructionDto.md) |  | [optional] 
**payInInstruction** | [**PayInInstructionDto**](PayInInstructionDto.md) |  | [optional] 
**usePayInMethod** | [**AccountMethodDto**](AccountMethodDto.md) |  | [optional] 
**usePayOutMethod** | [**AccountMethodDto**](AccountMethodDto.md) |  | [optional] 
**fee** | **Number** | The fee for the quote. | [optional] 
**processingFee** | **Number** | The processing fee. | [optional] 
**type** | **String** | The type of quote. | [optional] 
**netPrice** | **Number** | The net price fo the quote. | [optional] 
**grossPrice** | **Number** | The gross price of the quote. | [optional] 
**amountInGross** | **Number** | The price of the quote in gross. | [optional] 
**amountInNet** | **Number** | The price of the quote in net. | [optional] 
**fees** | [**FeesDto**](FeesDto.md) |  | [optional] 
**dateCreated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 
**lastUpdated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] 



## Enum: QuoteStatusEnum


* `ESTIMATE` (value: `"ESTIMATE"`)

* `TEMPLATE` (value: `"TEMPLATE"`)

* `PENDING` (value: `"PENDING"`)

* `ACCEPTED` (value: `"ACCEPTED"`)

* `PAYMENT_IN_RECEIVED` (value: `"PAYMENT_IN_RECEIVED"`)

* `PAYMENT_IN_SEEN` (value: `"PAYMENT_IN_SEEN"`)

* `PAYMENT_IN_FAILED` (value: `"PAYMENT_IN_FAILED"`)

* `FRAUD_CHECK_PENDING` (value: `"FRAUD_CHECK_PENDING"`)

* `FRAUD_CHECK_FAILED` (value: `"FRAUD_CHECK_FAILED"`)

* `PAYMENT_OUT_PENDING` (value: `"PAYMENT_OUT_PENDING"`)

* `PAYMENT_OUT_PROCESSED` (value: `"PAYMENT_OUT_PROCESSED"`)

* `PAYMENT_OUT_USED` (value: `"PAYMENT_OUT_USED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `CONVERSION_FAILED` (value: `"CONVERSION_FAILED"`)

* `PAYMENT_OUT_FAILED` (value: `"PAYMENT_OUT_FAILED"`)

* `LOCKED` (value: `"LOCKED"`)

* `REFUNDED` (value: `"REFUNDED"`)





## Enum: PaymentStatusEnum


* `PENDING` (value: `"PENDING"`)

* `SEEN` (value: `"SEEN"`)

* `SUCCESS` (value: `"SUCCESS"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `FAILED` (value: `"FAILED"`)

* `FRAUD_PENDING` (value: `"FRAUD_PENDING"`)

* `FRAUD_PENDING_MANUAL_REVIEW` (value: `"FRAUD_PENDING_MANUAL_REVIEW"`)

* `FRAUD_FAILED` (value: `"FRAUD_FAILED"`)

* `REFUND_PENDING` (value: `"REFUND_PENDING"`)

* `REFUNDED` (value: `"REFUNDED"`)

* `MANUAL_SUCCESS` (value: `"MANUAL_SUCCESS"`)

* `REFUND_FAILED` (value: `"REFUND_FAILED"`)





## Enum: TypeEnum


* `FIXED` (value: `"FIXED"`)

* `MARKET` (value: `"MARKET"`)




