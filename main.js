const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minDiv = document.getElementById("min");
const secondsDiv = document.getElementById("seconds");

const count = new Date(2021, 07, 20, 15, 11, 55);
console.log(count);

setInterval(function () {
  const now = new Date();
  //console.log(now);
  let interval = count - now;
  //console.log(interval);

  const minutesVar = 60 * 1000;

  const hourVar = 60 * 60 * 1000;

  const dayVar = 24 * 60 * 60 * 1000;

  const seconds = Math.floor((interval % minutesVar) / 1000);

  const minutes = Math.floor((interval % hourVar) / minutesVar);

  const hours = Math.floor((interval % dayVar) / hourVar);

  const days = Math.floor(interval / dayVar);

  daysDiv.textContent = days;
  hoursDiv.textContent = hours;
  minDiv.textContent = minutes;
  secondsDiv.textContent = seconds;

  //console.log(days);
}, 1000);
