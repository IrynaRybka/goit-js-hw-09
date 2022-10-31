// const getEl = selector => document.querySelector(selector);
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector("body");

const AMOUNT = 1000;
let timeoutId = null;

startBtn.addEventListener('click', colorRandom);
stopBtn.addEventListener('click', stopColorRandom);

// function colorRandom() {   
//         const changeColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//         bodyRef.style.backgroundColor = changeColor;
//         return changeColor;
// }
function colorRandom() {   
    timeoutId = setInterval(()=> {
        const changeColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        bodyRef.style.backgroundColor = changeColor;
        return changeColor;
    }, AMOUNT);
}

function stopColorRandom(){
    console.log("Bye");
    clearTimeout(timeoutId);
}

// timeoutId = setInterval(()=> {
// console.log('Show color '+ colorRandom())
// }, AMOUNT);