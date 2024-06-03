/**
 * Створіть функцію calculateBMI, яка приймає вагу (в кг)
 * і зріст (в м) та повертає індекс маси тіла.
 *
 * Індекс маси тіла дорівнює вазі в кілограмах,
 * поділеній на квадрат зросту в метрах.
 */

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return Number(bmi.toFixed(2));
}

console.log(calculateBMI(70, 1.78)); // 22.093170054286073
console.log(calculateBMI(80, 1.83)); // 23.888440980620498
console.log(calculateBMI(95, 1.91)); // 26.040952824758094
