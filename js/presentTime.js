const presentTime = document.querySelector(".present-time");

function getTime() {
  const date = new Date();
  const houres = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  presentTime.innerText = houres + ":" + minutes + ":" + seconds;
  presentTime.innerText = `${houres}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
