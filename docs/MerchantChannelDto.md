# BvnkApiEndpoints.MerchantChannelDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The UUID of the channel. | [optional] [default to 0]
**dateCreated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] [default to 0]
**lastUpdated** | **Number** | The date and time, encoded into UNIX epoch timestamps. | [optional] [default to 0]
**merchantId** | **String** | The merchant ID linked to the channel. | [optional] 
**walletCurrency** | **String** | The wallet currency of the channel. | [optional] 
**displayCurrency** | **String** | The display currency of the channel. | [optional] 
**payCurrency** | **String** | The payed currency of the channel. | [optional] 
**address** | **String** | The address of the channel | [optional] 
**tag** | **String** | The tag for payments | [optional] 
**protocol** | **String** | The protocol of the channel. | [optional] 
**reference** | **String** | The custom reference for the channel payment. | [optional] 
**status** | **String** | The status of the channel. | [optional] 
**uuid** | **String** | The UUID of the channel. | [optional] 
**redirectUrl** | **String** | The redirect URL to the channel payment page. | [optional] 
**uri** | **String** | The URI of the address for QR code | [optional] 
**alternatives** | [**[AlternativeAddressDto]**](AlternativeAddressDto.md) |  | [optional] 



## Enum: StatusEnum


* `OPEN` (value: `"OPEN"`)

* `CLOSED` (value: `"CLOSED"`)




