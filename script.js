const showAnswer = document.querySelectorAll(".answer-container");
const arrow = document.querySelectorAll(".question-container");

arrow.forEach((questionContainer) => {
  questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("turn-arrow");
    if (questionContainer.classList.contains("turn-arrow")) {
      showAnswer.forEach((answer) => {
        answer.classList.remove("hidden");
      });
    }
  });
});
