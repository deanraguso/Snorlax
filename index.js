setTimeout(() => {
  chrome.storage.sync.get(["snorlaxKeys"], ({ snorlaxKeys }) => {
    if (snorlaxKeys) {
      snorlaxKeys
        .replaceAll(" ", "")
        .split(",")
        .forEach((key) => {
          alert(key);
        });
    }
  });
});
