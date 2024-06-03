/**
 * Створіть функцію isInStock, яка приймає необхідну
 * кількість товару в заказі, та доступну кількість
 * товару на складі і повертає true, якщо на складі
 * достатньо товару для заказу, і false в іншому випадку.
 */

function isInStock(ordered, available) {
  // return available >= ordered;
  return ordered <= available;
}

console.log(isInStock(20, 30)); // true
console.log(isInStock(10, 15)); // true
console.log(isInStock(15, 10)); // false
console.log(isInStock(20, 15)); // false
