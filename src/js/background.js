chrome.browserAction.onClicked.addListener(tab => {
  chrome.browserAction.setPopup({
    tabId: tab.id,
    popup: 'html/popup.html'
  });
});
