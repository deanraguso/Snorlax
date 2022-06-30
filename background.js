let snorlaxState = true;
let snorlaxKeys = "carpet,oversized,danger"

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ snorlaxState, snorlaxKeys });
});

const getKeys = (callback) => {
  chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => callback(snorlaxKeys))
}

getKeys(console.log)
