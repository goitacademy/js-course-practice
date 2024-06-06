/**
 * Створіть функцію isWeekday, яка приймає рядок,
 * що представляє день тижня, і повертає true,
 * якщо це робочий день (з понеділка по п'ятницю),
 * і false в іншому випадку.
 */

function isWeekday(day) {
  return day !== "Saturday" && day !== "Sunday";

  // day !== "Saturday" && day !== "Sunday"
  // "Monday" !== "Saturday" && "Monday" !== "Sunday";
  // true && "Monday" !== "Sunday";
  // true && true
  // true

  // day !== "Saturday" && day !== "Sunday"
  // "Saturday" !== "Saturday" && "Saturday" !== "Sunday"
  // false && "Saturday" !== "Sunday"
  // false
}

console.log(isWeekday("Monday")); // true
console.log(isWeekday("Friday")); // true
console.log(isWeekday("Saturday")); // false
console.log(isWeekday("Sunday")); // false
