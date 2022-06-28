// window.alert("Hello world")
// window.find("snorlax")page in js

// Until I figure out how to chuck these into another file

const getKeys = (callback) => {
  chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => callback(snorlaxKeys))
}

getKeys(console.log)
