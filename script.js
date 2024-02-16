function timeFunc() {
  let timeHolder = document.getElementById('timeHolder');
  let dayHolder = document.getElementById('dayHolder');
  const time = new Date();

  timeHolder.innerHTML = `${
    time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
  }:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}:${
    time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
  } `;
  switch (time.getDay) {
    case 0:
      dayHolder.innerHTML = 'Sunday';
      break;
    case 1:
      dayHolder.innerHTML = 'Monday';
      break;
    case 2:
      dayHolder.innerHTML = 'Tuesday';
      break;
    case 3:
      dayHolder.innerHTML = 'Wednesday';
      break;
    case 4:
      dayHolder.innerHTML = 'Thursday';
      break;
    case 5:
      dayHolder.innerHTML = 'Friday';
      break;
    case 6:
      dayHolder.innerHTML = 'Saturday';
      break;
  }
}
setInterval(function () {
  timeFunc();
}, 1000);

function stopwatch() {
  let stopWatchHolder = document.getElementById('stopWatchHolder');
  let stopWatchBtn = document.getElementById('stopWatchBtn');
  if (stopWatchBtn.innerHTML == 'Start') {
    second = 0;
    minute = 0;
    hour = 0;
    stopWatchInterval = setInterval(function () {
      second++;
      if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
          minute = 0;
          hour++;
          if (hour == 24) {
            hour = 0;
          }
        }
      }
      stopWatchHolder.innerHTML = `${hour < 10 ? '0' + hour : hour}:${
        minute < 10 ? '0' + minute : minute
      }:${second < 10 ? '0' + second : second} `;
    }, 1000);
    stopWatchBtn.innerHTML = 'Set';
  } else {
    let stopWatchTimeHolder = document.getElementById('stopWatchTimeHolder');
    let stopWatchElement = document.createElement('li');
    stopWatchElement.innerHTML = `${hour < 10 ? '0' + hour : hour}:${
      minute < 10 ? '0' + minute : minute
    }:${second < 10 ? '0' + second : second} `;
    stopWatchTimeHolder.appendChild(stopWatchElement);
  }
}

function endStopwatch() {
  clearInterval(stopWatchInterval);
  let stopWatchBtn = document.getElementById('stopWatchBtn');
  stopWatchBtn.innerHTML = 'Start';
  document.getElementById('stopWatchHolder').innerHTML = '00:00:00';
}

function clearStopwatchElements() {
  let stopWatchTimeHolder = document.getElementById('stopWatchTimeHolder');
  let elements = stopWatchTimeHolder.querySelectorAll('li');
  for (let i = 0; i < elements.length; i++) {
    stopWatchTimeHolder.removeChild(elements[i]);
  }
}
