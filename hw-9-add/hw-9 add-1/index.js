"use strict"

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const body = document.querySelector("body");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");

startBtn.addEventListener("click", changeColor);
stopBtn.addEventListener( "click",  stopChangeColor);

let isActive = false;
let time = 500;

function changeColor () {
    if(!isActive) {
        isActive = false;
        let change = setInterval(changeBackgroundBody, time) 
    }
}

function stopChangeColor () {
    clearInterval(change);
    isActive = false;
}

function randomColor (arr) {
    return Math.floor(Math.random() * arr.length);
}
function changeBackgroundBody () {
     let colorsRand = randomColor(colors)
     body.style.background = colors[colorsRand];
}

