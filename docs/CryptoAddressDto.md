# BvnkApiEndpoints.CryptoAddressDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The crypto address to send funds to | [optional] 
**tag** | **String** | This is a payment destination tag. This fields isn&#39;t null when the paidCurrency currency value is XRP. | [optional] 
**protocol** | **String** | The protocol behind a currency, &#39;ERC20&#39; or &#39;TRC20&#39;. | [optional] 
**uri** | **String** | The destination address URI for QR code | [optional] 
**alternatives** | [**[AlternativeAddressDto]**](AlternativeAddressDto.md) | The list of non-default addresses for other tokens | [optional] 


