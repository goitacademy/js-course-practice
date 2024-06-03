/**
 * Створіть функцію isMultiple, яка приймає два числа та повертає true,
 * якщо перше число кратне другому, і false в іншому випадку.
 */

function isMultiple(a, b) {
  return a % b === 0;
}

console.log(isMultiple(10, 2)); // true
console.log(isMultiple(10, 3)); // false
console.log(isMultiple(12, 4)); // true
console.log(isMultiple(15, 4)); // false
