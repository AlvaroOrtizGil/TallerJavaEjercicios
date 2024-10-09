const nombre = document.querySelector('#nombre');
const email= document.querySelector('#email');
const number=document.querySelector('#numer');
// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput.addEventListener('invalid', () => {
    if(miInput.value === '') {
        // Campo vacío
        miInput.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    } else {
        // Patrón
        miInput.setCustomValidity('Debes introducir carácteres alfanuméricos');
    }
});