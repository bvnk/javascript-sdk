# BvnkApiEndpoints.Quote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**from** | **String** |  | [optional] 
**to** | **String** |  | [optional] 
**amountIn** | **Number** |  | [optional] 
**amountDue** | **Number** |  | [optional] 
**amountOut** | **Number** |  | [optional] 
**price** | **Number** |  | [optional] 
**quoteStatus** | **String** |  | [optional] 
**paymentStatus** | **String** |  | [optional] 
**acceptanceExpiryDate** | **Number** |  | [optional] 
**acceptanceDate** | **Number** |  | [optional] 
**paymentExpiryDate** | **Number** |  | [optional] 
**paymentReceiptDate** | **Number** |  | [optional] 
**payInLegs** | [**[PaymentLeg]**](PaymentLeg.md) |  | [optional] 
**payInMethod** | [**PayInMethod**](PayInMethod.md) |  | [optional] 
**payOutMethod** | [**PayOutMethod**](PayOutMethod.md) |  | [optional] 
**uuid** | **String** |  | [optional] 
**payOutInstruction** | [**PayOutInstruction**](PayOutInstruction.md) |  | [optional] 
**payInInstruction** | [**PayInInstruction**](PayInInstruction.md) |  | [optional] 
**usePayInMethod** | [**AccountMethod**](AccountMethod.md) |  | [optional] 
**usePayOutMethod** | [**AccountMethod**](AccountMethod.md) |  | [optional] 
**fee** | **Number** |  | [optional] 
**processingFee** | **Number** |  | [optional] 
**type** | **String** |  | [optional] 
**netPrice** | **Number** |  | [optional] 
**grossPrice** | **Number** |  | [optional] 
**amountInGross** | **Number** |  | [optional] 
**amountInNet** | **Number** |  | [optional] 
**fees** | [**Fees**](Fees.md) |  | [optional] 
**dateCreated** | **Number** |  | [optional] 
**lastUpdated** | **Number** |  | [optional] 



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




