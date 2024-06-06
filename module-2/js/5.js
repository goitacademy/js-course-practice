/**
 * Створіть функцію getSeason, яка приймає номер місяця (від 1 до 12)
 * і повертає назву відповідної пори року: "Winter", "Spring",
 * "Summer" або "Autumn". Якщо передали не валідний номер місяця,
 * наприклад 15, повертається рядок "Invalid month".
 */

function getSeason(month) {
  // if (month === 1 || month === 2 || month === 12) {
  //   return "Winter";
  // } else if (month === 3 || month === 4 || month === 5) {
  //   return "Spring";
  // } else if (month === 6 || month === 7 || month === 8) {
  //   return "Summer";
  // } else if (month === 9 || month === 10 || month === 11) {
  //   return "Autumn";
  // } else {
  //   return "Invalid month";
  // }

  switch (month) {
    case 1:
    case 2:
    case 12:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Autumn";
    default:
      return "Invalid month";
  }
}

console.log(getSeason(1)); // Winter
console.log(getSeason(4)); // Spring
console.log(getSeason(7)); // Summer
console.log(getSeason(10)); // Autumn
console.log(getSeason(13)); // Invalid month
console.log(getSeason(15)); // Invalid month
