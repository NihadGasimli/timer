let reqem = 0;
let t;
let lapCounter = 1;
var array = [0];

function timer() {
    reqem++;
    var hour = Math.floor(reqem / 3600)
    var minute = Math.floor((reqem - hour * 3600) / 60)
    var second = reqem % 60;
    document.querySelector('#timer').innerHTML = `${("0" + hour).slice(-2)}:${("0" + minute).slice(-2)}:${("0" + second).slice(-2)}`;
    array[0] = `${("0" + hour).slice(-2)}:${("0" + minute).slice(-2)}:${("0" + second).slice(-2)}`
}


function start() {
    if (!t) {
        t = setInterval(timer, 1000);
    }
}

function stop() {
    clearInterval(t);
    t = undefined;
}

function reset() {
    stop()
    reqem = 0;
    document.querySelector('#timer').innerHTML = `00:00:00`;
    lapCounter = 1;
    lapp.innerHTML = "";
}

document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);
document.querySelector('#reset').addEventListener('click', reset);
document.querySelector('#lap').addEventListener('click', lap);
const lapp = document.querySelector("#lapp")

function lap() {
    var newH1 = document.createElement('h1');
    newH1.textContent = `${lapCounter}. ${array[0]}`;
    newH1.style.border = "1px solid #7F574D"
    newH1.style.borderRadius = "20px 0px 0px 20px"
    lapp.appendChild(newH1);
    lapCounter++;
}



