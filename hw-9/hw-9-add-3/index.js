/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

let minutes;
let seconds;
let milliseconds;

const timer = {
  startTime: 0,
  deltaTime: 0,
  id: null,
  isActive: false
};

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", setActiveBtn);
stopBtn.addEventListener("click", stoptTimer);
stopBtn.addEventListener("click", setActiveBtn);

function startTimer(target) {
  
  if (!timer.isActive) {
    timer.startTime = Date.now();
    timer.isActive = true;
    timer.id = setInterval(updateClockface, 100);
  }
}

function stoptTimer(target) {
  clearInterval(timer.id);
  timer.isActive = false;
  timer.startTime = Date.now();
  timer.deltaTime = 0;
  timer.id = 0;
  clockface.textContent = getFormattedTime(timer.deltaTime);
}

function updateClockface() {
  const currentTime = Date.now();
  timer.deltaTime = currentTime - timer.startTime;
  clockface.textContent = getFormattedTime(timer.deltaTime);
}

function getFormattedTime(time) {
  const times = new Date(time);
  
  milliseconds = Number.parseInt(times.getMilliseconds() / 100);

  seconds = times.getSeconds();
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  minutes = times.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${minutes}:${seconds}.${milliseconds}`;
}

function setActiveBtn({ target }) {
  if (target.classList.contains("active")) {
    return;
  }

  startBtn.classList.remove("active");
  stopBtn.classList.remove("active");

  target.classList.add("active");
}