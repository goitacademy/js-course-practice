/**
 * Створіть функцію isWeekend, яка приймає рядок,
 * що представляє день тижня, і повертає true,
 * якщо це вихідний день (субота або неділя),
 * і false в іншому випадку.
 */

function isWeekend(day) {
  // if (day === "Saturday" || day === "Sunday") {
  //   return true;
  // } else {
  //   return false;
  // }

  return day === "Saturday" || day === "Sunday";

  // day === "Saturday" || day === "Sunday"
  // "Saturday" === "Saturday" || "Saturday" === "Sunday"
  // true || "Saturday" === "Sunday"
  // true

  // "Sunday" === "Saturday" || "Sunday" === "Sunday"
  // false || "Sunday" === "Sunday"
  // false || true
  // true

  // day === "Saturday" || day === "Sunday"
  // "Monday" === "Saturday" || "Monday" === "Sunday"
  // false || "Monday" === "Sunday"
  // false || false
  // false
}

console.log(isWeekend("Saturday")); // true
console.log(isWeekend("Sunday")); // true
console.log(isWeekend("Monday")); // false
console.log(isWeekend("Thursday")); // false
