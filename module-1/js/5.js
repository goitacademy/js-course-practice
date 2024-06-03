/**
 * Створіть функцію convertToCSSValue, яка приймає
 * число (значення) та рядок (одиниця вимірювання),
 * і повертає значення як рядок для використання в CSS властивості.
 */

function convertToCSSValue(value, unit) {
  return `${value}${unit}`;
}

console.log(convertToCSSValue(42, "px")); // 42px
console.log(convertToCSSValue(80, "%")); // 80%
console.log(convertToCSSValue(15, "em")); // 15em
