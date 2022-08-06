// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputText = document.querySelector ("#name-input");
const spanText = document.querySelector ("#name-output");

inputText.addEventListener("input", inputListener);

function inputListener (event) {
    if (event.currentTarget.value === "") {
        spanText.textContent = "Anonymous";
      } else {
        spanText.textContent = event.currentTarget.value;
      }
}


