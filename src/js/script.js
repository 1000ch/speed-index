const RUMSpeedIndex = require('RUM-SpeedIndex');

chrome.runtime.sendMessage({
  speedIndex: Math.round(RUMSpeedIndex())
})
