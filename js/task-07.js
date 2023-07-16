const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeTextSize);

textEl.style.fontSize = inputEl.value;

function changeTextSize() {
textEl.style.fontSize = `${inputEl.value}px`
}

