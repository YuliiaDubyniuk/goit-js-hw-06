const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", doValidation);

const validInput = Number(inputEl.dataset.length);

function doValidation(evt) {
  if (evt.currentTarget.value.length === validInput) {
    evt.currentTarget.classList.add("valid");
    evt.currentTarget.classList.remove("invalid");
  } else {
    evt.currentTarget.classList.add("invalid");
    evt.currentTarget.classList.remove("valid");
  }
 }
