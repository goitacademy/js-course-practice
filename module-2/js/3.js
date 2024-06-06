/**
 * Створіть функцію checkNumberSign, яка приймає число і
 * повертає рядок "positive" для додатних чисел,
 * "negative" для від'ємних чисел і "zero" для нуля.
 */

function checkNumberSign(number) {
  // if (number > 0) {
  //   return "positive";
  // } else if (number < 0) {
  //   return "negative";
  // } else {
  //   return "zero";
  // }

  if (number > 0) {
    return "positive";
  }

  if (number < 0) {
    return "negative";
  }

  return "zero";
}

console.log(checkNumberSign(5)); // positive
console.log(checkNumberSign(10)); // positive
console.log(checkNumberSign(-3)); // negative
console.log(checkNumberSign(-5)); // negative
console.log(checkNumberSign(0)); // zero
