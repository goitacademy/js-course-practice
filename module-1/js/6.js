/**
 * Створіть функцію isEven, яка приймає число і повертає true,
 * якщо число парне, і false в іншому випадку.
 */

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(6)); // true
console.log(isEven(7)); // false
console.log(isEven(11)); // false
