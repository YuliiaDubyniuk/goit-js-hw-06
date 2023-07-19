const inputEl = document.querySelector("input");
const btnCreateEl = document.querySelector("[data-create]");
const btnDestroyEl = document.querySelector("[data-destroy]");
const divBoxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function createBoxes() {
  const amount = inputEl.value;
  const boxesArray = [];
  
  for (let i = 1; i <= amount; i += 1) {
    const size = 30 + i * 10;
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    boxesArray.push(newDiv);
  };

  divBoxEl.append(...boxesArray);
};

function destroyBoxes() {
  divBoxEl.innerHTML = "";
  inputEl.value = "";
};

