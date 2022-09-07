export function valida(input) {

    const tipoDeInput = input.dataset.tipo;

    if (input.validity.valid) {

        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";

    } else {

        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, input);
    }

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "Ingrese un nombre.",
    },
    email: {
        valueMissing: "Ingrese un email",
        typeMismatch: "El correo no es válido",
    },
    asunto: {
        valueMissing: "Ingrese un asunto.",
    },
    mensaje: {
        valueMissing: "Ingrese un mensaje",
        patternMismatch: "Máximo de 300 caracteres",
    },
};

function mostrarMensajeDeError(tipoDeInput, input) {

    let mensajeError = "";

    tipoDeErrores.forEach((error) => {

        if (input.validity[error]) {
            mensajeError = mensajesDeError[tipoDeInput][error];
        }

    });

    return mensajeError;
}
/*
function setTextareaCustomError(textarea) {
    let message = ""
    const regEx = /^.{1,300}$/
    if(!regEx.test(textarea.value) && textarea.value.length > 0) {
        message = mensajesDeError["mensaje"]["customError"];
        console.log(message);
    }
    textarea.setCustomValidity(message);
}
*/
