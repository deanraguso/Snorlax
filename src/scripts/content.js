const handleMatch = (key) => {
  alert(`"${key}" is on this page!`)
}

const keysAlert = () => {
  setTimeout(() => {
    chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => {
      if (snorlaxKeys) {
        snorlaxKeys
          .replaceAll(" ", "")
          .split(",")
          .forEach((key) => {
            window.find(key) && handleMatch(key);
          });
      }
    });
  });
};

keysAlert();
