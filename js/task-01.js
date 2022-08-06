//Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст 
// заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених
//      в нього).

const categoriesAnimal = document.querySelectorAll(".item");
console.log (`Number of categories: ${categoriesAnimal.length}`)

categoriesAnimal.forEach((elem) => {
  return console.log(`Category: ${elem.querySelector("h2").textContent}
    Elements:${elem.querySelectorAll("li").length}`);
});