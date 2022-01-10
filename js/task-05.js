const inputEl = document.querySelector('#name-input')
const titleEl = document.querySelector('#name-output')

function onInputTitle(event) {

    if (event.currentTarget.value !== '') {
        titleEl.textContent = event.currentTarget.value;        
    } else {        
        titleEl.textContent = 'Anonymous';
    }

}

inputEl.addEventListener('input', onInputTitle )