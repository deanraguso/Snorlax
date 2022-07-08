const snorlax = document.getElementById("Snorlax");
const updateKeys = document.getElementById("UpdateKeys");

const handleSnorlax = () => {
  alert("Yawn!!");
};

const handleUpdateKeys = () => {
  alert("Handle update keys!!!");
};

snorlax.addEventListener("click", handleSnorlax);
updateKeys.addEventListener("click", handleUpdateKeys);
