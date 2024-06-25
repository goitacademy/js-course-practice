/**
 * Створіть функцію isInStock, яка приймає необхідну
 * кількість товару в замовленні, та доступну кількість
 * товару на складі і повертає true, якщо на складі
 * достатньо товару для замовлення, і false в іншому випадку.
 */

function isInStock(ordered, available) {
  // const result = ordered <= available;
  // const result = available >= ordered;
  return available >= ordered;
}

console.log(isInStock(20, 30)); // true
console.log(isInStock(10, 15)); // true
console.log(isInStock(15, 10)); // false
console.log(isInStock(20, 15)); // false
