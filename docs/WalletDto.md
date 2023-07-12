# BvnkApiEndpoints.WalletDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | The crypto wallet address | [optional] 
**alternatives** | **[Object]** | The array of alternative protocol addresses. | [optional] 
**approxAvailable** | **String** | The approximate amount availible in the wallet. | [optional] 
**approxBalance** | **String** | The balance amount availible of the wallet. | [optional] 
**available** | **Number** |  | [optional] 
**balance** | **Number** | The balance of the wallet. | [optional] 
**convertedAvailable** | **Number** | The availible converted amount | [optional] 
**currency** | [**CurrencyDto**](CurrencyDto.md) |  | [optional] 
**custodianWallet** | **Boolean** | Is a custodian wallet. | [optional] 
**depositFee** | **Number** | The fee to deposit funds in wallet. | [optional] 
**description** | **String** | The description of the wallet. | [optional] 
**id** | **Number** | The wallet ID. | [optional] 
**isEmoney** | **Boolean** | Is E Money Wallet | [optional] [default to false]
**lookup** | **String** | Is a lookup. | [optional] 
**protocol** | **String** | The protocol of the wallet. | [optional] 
**supportsDeposits** | **Boolean** | Is able to support deposits. | [optional] [default to true]
**supportsThirdParty** | **Boolean** | Is a third party wallet. | [optional] [default to false]
**supportsWithdrawals** | **Boolean** | Is able to support withdrawals. | [optional] [default to true]
**withdrawalFee** | **Number** | The fee to withdraw funds from wallet. | [optional] 


