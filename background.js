let snorlaxState = true;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ snorlaxState });
});
