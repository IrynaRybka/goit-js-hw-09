// const getEl = selector => document.querySelector(selector);
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector("body");

const AMOUNT = 1000;
let timeoutId = null;

startBtn.addEventListener('click', colorRandom);
stopBtn.addEventListener('click', stopColorRandom);


function colorRandom() { 
    noClickStartBtn();
     // const isHidden = getComputedStyle(startBtn, ":disabled");
    // console.log(isHidden.getPropertyValue("visibility"));
    
    timeoutId = setInterval(()=> {
        bodyRef.style.backgroundColor = getRandomHexColor();
        return ; 
    }, AMOUNT);
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

function stopColorRandom(){
    clickAgaineStartBtn();
    clearTimeout(timeoutId);
    console.log("No more color");
}

function noClickStartBtn() {
    startBtn.classList.add("no-click");
    stopBtn.classList.remove("no-click");
}

function clickAgaineStartBtn() {
    startBtn.classList.remove("no-click");
    stopBtn.classList.add("no-click");
}