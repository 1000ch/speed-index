document.addEventListener('DOMContentLoaded', () => {
  chrome.runtime.onMessage.addListener((results, sender, sendResponse) => {
    document.querySelector('#speedIndex').textContent = results.speedIndex;
  });

  chrome.tabs.executeScript({
    file: 'js/script.js'
  });
});
