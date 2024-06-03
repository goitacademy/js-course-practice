/**
 * Створіть функцію makeFullName, яка приймає ім'я та прізвище
 * і повертає повне ім'я у форматі "firstName lastName".
 * Де замість firstName та lastName потрібно підставити ім'я та прізвище.
 */

function makeFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(makeFullName("Jacob", "Mercer")); // Jacob Mercer
console.log(makeFullName("Adrian", "Cross")); // Adrian Cross
