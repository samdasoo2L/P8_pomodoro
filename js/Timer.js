const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
const hour = document.querySelector(".timer-hour");
const minute = document.querySelector(".timer-minute");
const resultMinute = document.querySelector(".result-min");
const resultHour = document.querySelector(".result-hour");

const timerTime = 5;
let reduceInterval;

function calculResult() {
  const minScore = parseInt(resultMinute.innerText[0]);
  const hourScore = parseInt(resultHour.innerText[0]);
  if (minScore != 3) {
    resultMinute.innerText = `${minScore + 1}/4`;
  } else {
    resultMinute.innerText = `0/4`;
    resultHour.innerText = `${hourScore + 1}/5`;
  }
}

function zeroTime() {
  hour.innerText = String(Math.floor(timerTime / 60)).padStart(2, "0");
  minute.innerText = String(timerTime % 60).padStart(2, "0");
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  calculResult();
  clearInterval(reduceInterval);
}

function reduceTime() {
  const nowTimer =
    parseInt(hour.innerText) * 60 + parseInt(minute.innerText) - 1;
  hour.innerText = String(Math.floor(nowTimer / 60)).padStart(2, "0");
  minute.innerText = String(nowTimer % 60).padStart(2, "0");
  if (nowTimer === 0) {
    zeroTime();
  }
}

function startTimer() {
  reduceInterval = setInterval(reduceTime, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
}

function stopTimer() {
  clearInterval(reduceInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  hour.innerText = String(Math.floor(timerTime / 60)).padStart(2, "0");
  minute.innerText = String(timerTime % 60).padStart(2, "0");
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
