'use strict';
const time = document.querySelector('.js-time');
const start = document.querySelector('.js-start');
const lap = document.querySelector('.js-take-lap');
const reset = document.querySelector('.js-reset');
const lapsList = document.querySelector('.js-laps');

start.addEventListener('click', startTimer);
lap.addEventListener('click', createLap);
reset.addEventListener('click', resetTimer);


//==============================  START TIMER FUNC  =====================================//

let isActiveTimer = false;
let intervalID = null;
let startTime = 0;
let pauseStartTime = null;
let isActivePause = false;
let arrPauseIntervals = [];
let sumPauseIntervals = 0;

function startTimer() {
  //START Timer
  if (!isActiveTimer) {
    isActiveTimer = true;
    startTime = Date.now();
    intervalID = setInterval(() => (time.textContent = getFormatedTime(Date.now() - startTime)), 100);
    start.textContent = 'PAUSE';
    return;
  }

  //PAUSE ON
  if ( start.textContent === 'PAUSE' && !isActivePause ) {
    isActivePause = true;
    clearInterval(intervalID);
    pauseStartTime = Date.now();
    time.textContent = getFormatedTime(pauseStartTime - startTime - sumPauseIntervals);
    start.textContent = 'CONTINUE';
    return;
  }

  //PAUSE OFF
  if (start.textContent === 'CONTINUE' && isActivePause) {
    isActivePause = false;
    let pauseTime = Date.now() - pauseStartTime;
    arrPauseIntervals.push(pauseTime);
    sumPauseIntervals = arrPauseIntervals.reduce((sum, current) => sum + current, 0);
    intervalID = setInterval(
      () => (time.textContent = getFormatedTime(Date.now() - startTime - sumPauseIntervals)),
      100);
    pauseStartTime = null;
    start.textContent = 'PAUSE';
    return;
  }
}

function createLap() {
  if (!isActiveTimer) return;
  let lap = document.createElement('li');
  lap.classList.add('lap-li')
  let lapTime;
  if (isActivePause) {
    lapTime = getFormatedTime(pauseStartTime - startTime - sumPauseIntervals);
  } else {lapTime = getFormatedTime(Date.now() - startTime - sumPauseIntervals);}
  lap.textContent = lapTime;
  lapsList.appendChild(lap);
}

function resetTimer() {
  if (!isActiveTimer) return;
  time.textContent = '00:00.0';
  start.textContent = 'START';
  startTime = 0;
  isActivePause = false;
  pauseStartTime = null;
  arrPauseIntervals = [];
  sumPauseIntervals = 0;
  isActiveTimer = false;
  clearInterval(intervalID);
}


function getFormatedTime(time) {
  
  const date = new Date (time);
  let min = date.getMinutes();

  if( min < 10 ) {
    min = "0" + min;
  }

  let sec = date.getSeconds();
  if(sec < 10 ) {
    sec = "0"+ sec;
  }

  let milis = parseInt(date.getMilliseconds() / 100)

    return `${min}:${sec}.${milis}`;
  }
