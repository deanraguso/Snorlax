const updateKeys = document.getElementById("updateKeys");

updateKeys.addEventListener("click", () => {
  createNotification();
  console.log("I see it!")
})

const createNotification = () => {
  chrome.notifications.create("MATCH", {
    type: "basic",
    iconUrl: "/src/assets/snorlax32.png",
    title: "Keyword Matched!",
    contextMessage: "One of your keywords has been found on the page!",
    priority: 2,
    buttons: [
      {
        title: "Yup",
      },
    ],
  });
};
