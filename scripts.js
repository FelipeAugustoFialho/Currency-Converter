const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

async function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueCoverted = document.querySelector(".currency-value")
   
/*
   const dolarToday = 5.2
   const euroToday = 6.2
   const libraToday = 6.25
   const bitCoinToday = 206.690
*/
const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitCoinToday = data.BTCBRL.high
    const libraToday = data.GBPBRL.high
    console.log(data)

  

if (currencySelect.value =="dolar"){
   currencyValueCoverted.innerHTML =new Intl.NumberFormat("en-US",{
      style:"currency",
      currency:"USD"
  
    
   }).format(inputCurrencyValue / dolarToday )


}
if (currencySelect.value == "euro"){
   currencyValueCoverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency: "EUR"
   }).format(inputCurrencyValue / euroToday)
}

if (currencySelect.value == "libra"){
   currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-UK",{
      style:"currency",
      currency: "LBR"
   }).format(inputCurrencyValue / libraToday)
}

   if (currencySelect.value == "bitcoin"){
      currencyValueCoverted.innerHTML = new Intl.NumberFormat("BTC",{
         style:"currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitCoinToday)

   }



   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
      style:"currency",
      currency:"BRL"

   }).format(inputCurrencyValue)
 
}
function changeCurrency(){
const currencyName= document.getElementById("currency-name")
const currencyImg = document.querySelector(".currency-img")


if(currencySelect.value == "dolar"){
   currencyName.innerHTML = "Dolar Americano"
   currencyImg.src = "./img/dolar.png"
}
if (currencySelect.value =="euro"){
   currencyName.innerHTML= "Euro"
   currencyImg.src = "./img/euro.png"
  
}

if (currencySelect.value =="libra"){
   currencyName.innerHTML= "Libra"
   currencyImg.src = "./img/libra.png"
  
}

if (currencySelect.value =="bitcoin"){
   currencyName.innerHTML = "BitCoin"
   currencyImg.src = "./img/bitcoin.png"
}

convertValues()
}

currencySelect.addEventListener("change",changeCurrency)

convertButton.addEventListener("click", convertValues)
