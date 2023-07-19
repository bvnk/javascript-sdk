# BvnkApiEndpoints.QuoteRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** | The currency to convert from. | [default to &#39;EUR&#39;]
**to** | **String** | The currency to convert to. | [default to &#39;USDC&#39;]
**fromWallet** | **Number** | The ID of the wallet converted from. | [default to 3598236]
**useMinimum** | **Boolean** | Is converting the minimum allowed amount. | [default to false]
**useMaximum** | **Boolean** | Is converting the max amount of the wallet. | [default to false]
**toWallet** | **Number** | The ID of the wallet converted to. | [default to 3598514]
**amountIn** | **Number** | The amount being converted. | [default to 10]
**payInMethod** | **String** | The type of method in. | [default to &#39;wallet&#39;]
**payOutMethod** | **String** | The type of method out. | [default to &#39;wallet&#39;]


