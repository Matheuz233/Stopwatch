var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;
let click = false;

function only_one_click() {
  click = !click;
  if (click) {
    interval = setInterval(timer, 1000);
  } else {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time").innerText = "00:00:00";
  }
}

function pause() {
  click = false;
  clearInterval(interval);
}
function reset() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  click = false;
  document.getElementById("time").innerText = "00:00:00";
}

function timer() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;

    if (minutes == 60) {
      hours++;
      minutes = 0;
    }
  }
  document.getElementById("time").innerText =
    twoDigts(hours) + ":" + twoDigts(minutes) + ":" + twoDigts(seconds);
}

function twoDigts(digits) {
  if (digits < 10) {
    return "0" + digits;
  } else {
    return digits;
  }
}
