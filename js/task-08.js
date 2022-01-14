const form = document.querySelector('.login-form')
const formData = {};

function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === ''
        || event.currentTarget.elements.password.value === '') {
        alert('Все поля должны быть заполнены!!!');
        event.currentTarget.reset();
    } else {
        const emailName = event.currentTarget.elements.email.name;
        const passwordName = event.currentTarget.elements.password.name;
        formData[emailName] = event.currentTarget.elements.email.value;
        formData[passwordName] = event.currentTarget.elements.password.value;
        console.log(formData);
        event.currentTarget.reset();
    }   
}

form.addEventListener('submit', onFormSubmit)