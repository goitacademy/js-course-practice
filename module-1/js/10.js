/**
 * Створіть функцію `calculateCircleArea`,
 * яка приймає радіус кола та повертає його площу.
 *
 * Площа кола дорівнює π (3.14159), помноженій на квадрат радіуса.
 */

function calculateCircleArea(radius) {
  const PI = 3.14159;
  // const result = PI * radius * radius;
  // const result = PI * Math.pow(radius, 2);
  const result = PI * radius ** 2;
  return result;
}

console.log(calculateCircleArea(5)); // 78.53975
console.log(calculateCircleArea(10)); // 314.159
console.log(calculateCircleArea(15)); // 706.85775
