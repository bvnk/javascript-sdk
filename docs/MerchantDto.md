# BvnkApiEndpoints.MerchantDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The ID of the Merchant ID. | [optional] 
**merchantId** | **String** | The Merchant ID as a UUID. | [optional] 
**displayName** | **String** | The name of the merchant displayed on the payments page. | [optional] 
**secret** | **String** | The secret key used to validate webhooks. | [optional] 
**webhookUrl** | **String** | The webhooks URL that webhoosk are sent to. | [optional] 
**autoConvertInvalidPayments** | **Boolean** | Is set to auto convert invalid payments. | [optional] [default to true]
**defaultExpiryMinutes** | **Number** | The default number of minutes before a payment expires for this Merchant ID. | [optional] 
**webhookVersion** | **Number** | The version of webhooks sent. | [optional] 
**wallet** | [**WalletDto**](WalletDto.md) |  | [optional] 
**emailRecipients** | **String** | The recipients of event emails. | [optional] 


