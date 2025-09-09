// coin.js
function getCoins(){return parseInt(localStorage.getItem('coins')||'0');}
function setCoins(v){localStorage.setItem('coins',v);document.getElementById('coinDisplay').innerText='Coin: '+v;}