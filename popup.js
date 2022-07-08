const snorlax = document.getElementById("Snorlax");
const updateKeys = document.getElementById("UpdateKeys");
const keyInput = document.getElementById("KeyInput");

const handleSnorlax = () => {
  alert("Yawn!!");
};

const saveKeys = (snorlaxKeys) => {
  console.log(`Saving Keys: ${snorlaxKeys}`);
  chrome.storage.sync.set({ snorlaxKeys });
};

chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => {
  keyInput.value = snorlaxKeys;
});

snorlax.addEventListener("click", handleSnorlax);
updateKeys.addEventListener("click", () => {
  saveKeys(keyInput.value);
});
