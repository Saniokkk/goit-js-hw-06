
let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

function onDecrementValue() {     
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

function onIncrementValue() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;    
}

decrementBtn.addEventListener('click', onDecrementValue);
incrementBtn.addEventListener('click', onIncrementValue);
