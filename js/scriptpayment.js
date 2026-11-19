



console._log = console.log;
console.log = function() {
    document.querySelector('p').innerText = arguments[0];
    console._log.apply(null, arguments);
  }
  
const result = (getRandomInRange(10, 99)) + ' RM';
  
console.log(result);

function btnon() {
    document.getElementById('payment__methodcard').style.display='none';
    document.getElementById('payment__methodcard__active').style.display='block';
    document.getElementById('payment__methodtachngo').style.display='block';
    document.getElementById('payment__methodtachngo__active').style.display='none';
    document.getElementById('payCARD').style.display='flex';
    document.getElementById('payQR').style.display='none';
    document.getElementById('pay__h2').style.display='none';
}

function btnon2() {
    document.getElementById('payment__methodtachngo').style.display='none';
    document.getElementById('payment__methodtachngo__active').style.display='block';
    document.getElementById('payment__methodcard').style.display='block';
    document.getElementById('payment__methodcard__active').style.display='none';
    document.getElementById('payCARD').style.display='none';
    document.getElementById('payQR').style.display='flex';
    document.getElementById('pay__h2').style.display='none';
}

function successful() {
    document.getElementById('payment__methodcard').style.display='block';
    document.getElementById('payment__methodtachngo').style.display='block';
    document.getElementById('payment__methodtachngo__active').style.display='none';
    document.getElementById('payment__methodcard__active').style.display='none';
    document.getElementById('payCARD').style.display='none';
    document.getElementById('payQR').style.display='none';
    document.getElementById('pay__h2').style.display='none';
    document.getElementById('pay__successful').style.display='flex';
    document.getElementById('payment').style.display='none';
    document.getElementById('partition').style.display='none';
    document.getElementById('pay').style.width='1289px';
    document.getElementById('pay').style.left='0';
}