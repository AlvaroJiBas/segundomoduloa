import {Perro, Gato} from './Animal.js';  

// Create a Dog instance


// Get buttons from the DOM
const perroButton = document.getElementById('perroButton');
const gatoButton = document.getElementById('gatoButton');

// Add event listeners for button clicks
perroButton.addEventListener('click', () => {
    var miPerro = new Perro(document.getElementById('nombre').value, document.getElementById('raza').value);
    miPerro.hablar();  // Llamar al método de la clase Perro
});
gatoButton.addEventListener('click', () => {
    var miGato = new Gato(document.getElementById('nombre').value, document.getElementById('raza').value);
    miGato.hablar();  // Llamar al método de la clase Perro
});