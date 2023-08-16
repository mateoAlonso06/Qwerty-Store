"use strict";

let formulario = document.getElementById('form'); // formulario
let btnValidar = document.getElementById("btnValidar"); // boton de validacion
let valorCaptcha = document.getElementById('captcha'); // div que genera el captcha
let respuesta = document.getElementById('respuesta-captcha'); // div que genera la respuesta a la validacion

// Generar Captcha Aleatorio
function generarCaptcha(long) {
    let caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let resultado = '';

    for(let i = 0; i < long; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indice);
    }

    return resultado;
}

const captcha = document.createElement('P');
captcha.textContent = generarCaptcha(8);
captcha.classList.add('captchaP')
valorCaptcha.appendChild(captcha); 

// Validar Captcha
btnValidar.addEventListener("click", function(e) {
    e.preventDefault();
    
    let respuestaCaptcha = document.createElement('P');
    let input = document.getElementById('respuesta');

    if(input.value === captcha.textContent) {
        respuestaCaptcha.classList.add('correcto');
        respuestaCaptcha.textContent = "Captcha Valido"
        respuesta.appendChild(respuestaCaptcha);
        borrarAlert(respuestaCaptcha);
    } else {
        respuestaCaptcha.classList.add('incorrecto');
        respuestaCaptcha.textContent = "Captcha Invalido"
        respuesta.appendChild(respuestaCaptcha);
        borrarAlert(respuestaCaptcha);
    }
})

function borrarAlert(alert) {
    setTimeout(() => {
        alert.remove();
    }, 5000); 
}


// Evitar envio de formulario
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
     console.log("formulario enviado correctamente");
});
