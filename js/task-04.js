const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const counterEl = document.querySelector('#value');

let counterValue = 0;


btnDecrementEl.addEventListener("click", onClickDecrease);
btnIncrementEl.addEventListener("click", onClickIncrease);

function onClickDecrease() {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}    

function onClickIncrease() {
    counterValue += 1;
    counterEl.textContent = counterValue;
}
    
