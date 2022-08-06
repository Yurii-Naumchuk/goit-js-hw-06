// Лічильник складається зі спану і кнопок, які по кліку 
// повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counterValue = {
    value: 0,
    buttonDecrement() {
      this.value -= 1;
    },
    buttonIncrement() {
      this.value += 1;
    },
  };

  const buttonDecrement = document.querySelector('button[data-action="decrement"]');
  const buttonIncrement = document.querySelector('button[data-action="increment"]');
  const valueEL = document.querySelector("#value");
  buttonDecrement.addEventListener("click", function () {
    counterValue.buttonDecrement();
    valueEL.textContent = counterValue.value;
  });
  buttonIncrement.addEventListener("click", function () {
    counterValue.buttonIncrement();
    valueEL.textContent = counterValue.value;
  });






