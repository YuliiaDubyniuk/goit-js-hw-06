const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", doValidation);

const validInput = Number(inputEl.dataset.length);

function doValidation(evt) {
  if (evt.currentTarget.value.trim().length === validInput) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }

function changeClass(a, b) {
    evt.currentTarget.classList.add(a);
    evt.currentTarget.classList.remove(b);
}
};


