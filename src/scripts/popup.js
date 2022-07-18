const snorlax = document.getElementById("Snorlax");
const title = document.getElementById("Title");
const updateKeys = document.getElementById("UpdateKeys");
const keyInput = document.getElementById("KeyInput");

const handleSnorlax = () => {
  alert("Yawn!!");
};

const handleEasterEgg = () => {
  snorlax.src = "/src/assets/Terasa2D.png";
  title.innerText = "Terasa"
};

const saveKeys = (snorlaxKeys) => {
  console.log(`Saving Keys: ${snorlaxKeys}`);
  chrome.storage.sync.set({ snorlaxKeys });
};

chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => {
  keyInput.value = snorlaxKeys;
});

snorlax.addEventListener("wheel", handleEasterEgg);
snorlax.addEventListener("click", handleSnorlax);
updateKeys.addEventListener("click", () => {
  saveKeys(keyInput.value);
});
