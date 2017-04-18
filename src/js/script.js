const RUMSpeedIndex = require('RUM-SpeedIndex');
const speedIndex = Math.round(RUMSpeedIndex());

chrome.runtime.sendMessage({
  speedIndex
});
