const changeState = document.querySelectorAll(".faq-container");

changeState.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active-state")) {
      item.classList.remove("active-state");
    } else {
      changeState.forEach((item) => {
        item.classList.remove("active-state");
      });
      item.classList.add("active-state");
    }
  });
});
