const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
//
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listIngridient = document.querySelector("#ingredients");
const listEl = ingredients.map(item => {
  const itemEl = document.createElement("li");
  itemEl.textContent = `${item}`;
  itemEl.classList.add("item");
  return itemEl;
  });
 listIngridient.append(...listEl);


