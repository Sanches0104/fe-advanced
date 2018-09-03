'use strict';


// Счетчик через класс с интервалом
// ========================================
const clockface = document.querySelector('.js-clockface');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');

class Timer {
  constructor({
    startValue = 0,
    delay = 1000,
    onTick = () => console.log(val),
  }) {
    this.value = startValue;
    this.timerid = null;
    this.delay = delay;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (!this.isActive) {
      this.isActive = true;

      this.timerId = setInterval(() => {
        this.value += 1;
        this.onTick(this.value);
      }, this.delay);
    }
  }

  stop() {
    this.isActive = false;
    clearInterval(this.timerId);
    this.timerId = null;
    this.value = 0;
    this.onTick(this.value);
  }
}

const timer = new Timer({
  startValue: 0,
  delay: 500,
  onTick: updateClockface,
});

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(val) {
  clockface.textContent = val;
}

