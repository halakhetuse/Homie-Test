const startButton = document.querySelector("#start-test");

if (startButton) {
  startButton.addEventListener("click", () => {
    window.location.assign("./quiz.html");
  });
}
