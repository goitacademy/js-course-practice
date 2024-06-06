/**
 * Створіть функцію canEnrollInSchool, яка приймає вік дитини
 * та булеве значення, що вказує на те, чи має дитина сертифікат
 * про щеплення. Функція повинна повернути true, якщо вік дитини
 * від 5 до 18 років включно і вона має сертифікат про щеплення,
 * і false в іншому випадку.
 */

function canEnrollInSchool(age, isVaccinated) {
  return age >= 5 && age <= 18 && isVaccinated;

  // age >= 5 && age <= 18 && isVaccinated
  // 6 >= 5 && 6 <= 18 && true
  // true && 6 <= 18 && true
  // true && true && true
  // true

  // age >= 5 && age <= 18 && isVaccinated
  // 4 >= 5 && 4 <= 18 && true
  // false && 4 <= 18 && true
  // false

  // age >= 5 && age <= 18 && isVaccinated
  // 16 >= 5 && 16 <= 18 && false
  // true && 16 <= 18 && false
  // true && true && false
  // false
}

console.log(canEnrollInSchool(6, true)); // true
console.log(canEnrollInSchool(4, true)); // false
console.log(canEnrollInSchool(16, false)); // false
