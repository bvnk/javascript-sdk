# BvnkApiEndpoints.PayRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** | Your Merchant ID. You can find it on the Merchant Details page in your account. | [default to &#39;5C8D8D78-366A-4AFB-B658-A64CE543C5DB&#39;]
**amount** | **Number** | The payment amount. | [default to 223.05]
**expiryMinutes** | **Number** | The time period after which payment expires. | [optional] [default to 20]
**currency** | **String** | The currency acronym. | [default to &#39;EUR&#39;]
**returnUrl** | **String** | The URL that the customer will be redirected to if they click &#39;Back to Merchant&#39; button on the payment web page. | [optional] [default to &#39;https://my-shop.com/payment-complete?ref&#x3D;xyz&#39;]
**reference** | **String** | The custom payment reference ID to tie the payment to your customer. | [default to &#39;myUniqueRef333&#39;]
**type** | [**DirectionDto**](DirectionDto.md) |  | 
**payInDetails** | [**PayInDetailDto**](PayInDetailDto.md) |  | [optional] 
**payOutDetails** | [**PayOutDetailDto**](PayOutDetailDto.md) |  | [optional] 


