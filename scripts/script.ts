// import * as moment from 'moment';
/// <reference path="../node_modules/moment/moment.d.ts" />

setInterval(() => {
  isTenSeconds(moment());
}, 1000);

function isTenSeconds(time) {
  let curTime = time.seconds();
  if (curTime === 10) {
    document.getElementById('alarm').innerHTML
      = `<h1>Wake up, it's ${curTime} seconds</h1>`;
  }
};
