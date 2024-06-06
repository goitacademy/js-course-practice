/**
 * Створіть функцію checkForVowel, яка приймає символ
 *  і повертає рядок "Vowel" якщо символ є голосною (a, e, i, o, u),
 * і "Not a vowel" в іншому випадку.
 */

function checkForVowel(char) {
  const vowels = "aeiou";
  const isVowel = vowels.includes(char.toLowerCase());

  return isVowel ? "Vowel" : "Not a vowel";

  // if (isVowel) {
  //   return "Vowel";
  // } else {
  //   return "Not a vowel";
  // }
}

console.log(checkForVowel("a")); // Vowel
console.log(checkForVowel("u")); // Vowel
console.log(checkForVowel("E")); // Vowel
console.log(checkForVowel("b")); // Not a vowel
console.log(checkForVowel("v")); // Not a vowel
console.log(checkForVowel("G")); // Not a vowel
