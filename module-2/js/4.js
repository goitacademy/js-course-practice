/**
 * Створіть функцію getStatusMessage, яка приймає
 * код статусу (200, 400, 401, 403, 404, 500) і повертає
 * відповідне повідомлення: "OK", "Bad Request", "Unauthorized",
 * "Forbidden", "Not Found", "Internal Server Error". Для будь
 * якого іншого коду статусу повертається рядок "Unknown status code".
 */

function getStatusMessage(statusCode) {
  switch (statusCode) {
    case 200:
      return "OK";
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Unknown status code";
  }
}

console.log(getStatusMessage(200)); // OK
console.log(getStatusMessage(404)); // Not Found
console.log(getStatusMessage(500)); // Internal Server Error
console.log(getStatusMessage(999)); // Unknown status code
