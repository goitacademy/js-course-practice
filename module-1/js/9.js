/**
 * Створіть функцію celsiusToFahrenheit,
 * яка приймає температуру в градусах Цельсія
 * і повертає рядок "температура°F" з температурою
 * в градусах Фаренгейта.
 *
 * Формула: 𝐹=𝐶×9/5+32
 */

function celsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9) / 5 + 32;
  return `${fahrenheit}°F`;
}

console.log(celsiusToFahrenheit(25)); // 77°F
console.log(celsiusToFahrenheit(15)); // 59°F
console.log(celsiusToFahrenheit(30)); // 86°F
