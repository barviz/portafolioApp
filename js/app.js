import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

textArea.addEventListener("blur", (input) =>{
    valida(input.target);
});