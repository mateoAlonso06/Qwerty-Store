"use strict";

const menu = document.querySelector("#div-menu");
const navbar = document.querySelector('#ul-menu');

menu.addEventListener('click', function() {
    navbar.classList.toggle('show');
});

/* Agregar evento de clic al botón del menú
Alternar clase 'show' en el menú principal */
