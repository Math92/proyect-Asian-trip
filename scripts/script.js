import { coreaDelSur, filipinas, indonesia, japon, nepal } from './city.js';

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a.city');
let tituloElement = document.getElementById('titulo');
let subtituloElement = document.getElementById('subtitulo');
let parrafoElement = document.getElementById('parrafo');

// Agregar el evento clic a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase "active" al enlace actual
        this.classList.add('active');

        // Obtener el contenido correspondiente según el enlace
        let contenido = obtenerContenido(this.textContent);

        // Mostrar el contenido en los elementos del DOM
        tituloElement.innerHTML = contenido.titulo;
        subtituloElement.innerHTML = contenido.subtitulo;
        parrafoElement.innerHTML = contenido.parrafo;
    });
});

// Función para obtener el contenido según el enlace seleccionado
function obtenerContenido(enlace) {
    console.log(enlace)
    let contenido = {
        'Corea del Sur': coreaDelSur,
        'Filipinas': filipinas,
        'Indonesia': indonesia,
        'Japon': japon,
        'Nepal': nepal
    };

    return contenido[enlace];
}





// Obtener el elemento de la sección que deseas cambiar de fondo
const firstChildSection = document.querySelector('main > section:first-child');

// Crear un objeto que contenga los fondos correspondientes a cada ciudad
const cityBackgrounds = {
    'Corea del Sur': 'url(../img/corea-del-sur.png)',
    'Filipinas': 'url(../img/filipinas.jpg)',
    'Indonesia': 'url(../img/indonesia.jpg)',
    'Japon': 'url(../img/japon2.jpg)',
    'Nepal': 'url(../img/nepal.jpg)'
};


let ciudad; // Declarar la variable en un alcance más amplio

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar la clase "active" al enlace actual
        this.classList.add('active');

        // Actualizar la variable 'ciudad'
        ciudad = this.textContent;

        // Obtener la sección a la que deseas aplicar el fondo
        let firstChildSection = document.querySelector('main > section:first-child');

        // Cambiar el fondo de la sección last-child
        firstChildSection.style.backgroundImage = cityBackgrounds[ciudad];
    });
});


