document.addEventListener('DOMContentLoaded', () => {
  const speedIndex = document.querySelector('#speedIndex');

  chrome.runtime.onMessage.addListener(results => {
    speedIndex.textContent = results.speedIndex;
  });

  chrome.tabs.executeScript({
    file: 'js/script.js'
  });
});
