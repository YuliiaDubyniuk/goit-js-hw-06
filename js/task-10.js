const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divBoxEl = document.querySelector('#controls');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

const color = getRandomHexColor();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 1; i <= amount; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = color;
    newDiv.style.width = calc(30 + i * 10) + "px";
    newDiv.style.height = calc(30 + i * 10) + "px";
    divBoxEl.append(newDiv);
  }
};

function destroyBoxes() {
  divBoxEl.innerHTML = "";
};

