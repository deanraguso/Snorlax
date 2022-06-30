(window.onload = function () {
  const snorlax = document.getElementById("Snorlax");

  const handleSnorlax = () => {
    alert("Yawn!!")
    // chrome.runtime.sendMessage({ type: "snorlax" }, (response) =>
    //   console.log(response)
    // );
  };

  snorlax.addEventListener("click", e => handleSnorlax());
})();
