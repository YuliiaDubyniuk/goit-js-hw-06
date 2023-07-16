const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

const defGreetingName = "Anonymous"

textInput.addEventListener("input", changeGreetingName);

function changeGreetingName(evt) {
  textOutput.textContent = evt.currentTarget.value.trim() || defGreetingName;
}
