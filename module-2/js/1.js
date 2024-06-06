/**
 * Створіть функцію checkEvenOdd, яка приймає число
 * і повертає рядок "Even" для парних чисел та "Odd" для непарних.
 */

function checkEvenOdd(number) {
  // if (number % 2 === 0) {
  //   return "Even";
  // } else {
  //   return "Odd";
  // }

  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(6)); // Even
console.log(checkEvenOdd(7)); // Odd
console.log(checkEvenOdd(11)); // Odd
