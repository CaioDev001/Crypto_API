const btc = document.getElementById('bitcoin')
const eth = document.getElementById('ethereum')
const doge = document.getElementById('dogecoin')

let settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function(response) {
  btc.innerText = response.bitcoin.usd
  eth.innerText = response.ethereum.usd
  doge.innerText = response.dogecoin.usd
})