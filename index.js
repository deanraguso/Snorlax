// window.find("snorlax")page in js

// Until I figure out how to chuck these into another file

const getKeys = (callback) => {
  chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => callback(snorlaxKeys))
}

const snorlaxYawn = () => {
  window.alert("Snorlax: Yawn!!!");
};

getKeys(console.log);

const snorlax = document.getElementById("Snorlax");
snorlax.addEventListener("click", () => {
  snorlaxYawn()
});
