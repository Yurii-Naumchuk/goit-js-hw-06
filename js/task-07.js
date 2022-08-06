// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість
//   font-size. В результаті, перетягуючи повзунок, буде змінюватися 
//   розмір тексту.

const input = document.querySelector ("#font-size-control");
const spanTxtEl = document.querySelector("#text");

input.addEventListener("input", fontChange);
function fontChange(event) {
    spanTxtEl.style.fontSize = event.currentTarget.value + "px";
    let a = event.currentTarget.value + "px";
    console.log(a);
}

