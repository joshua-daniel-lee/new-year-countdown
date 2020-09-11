//Set HTML
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

//Date that Ready Player Two launches
const newYear = "1 Jan 2021";

//Countdown function
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = (newYearDate - currentDate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;
  //console.log(totalSeconds, days, hours, minutes, seconds);
  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

//Formatting time with a zero
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//Intial Call
countdown();

//Set interval
setInterval(countdown, 1000);
