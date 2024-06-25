/**
 * Створіть функцію countVowels, яка приймає рядок
 * і повертає кількість голосних (a, e, i, o, u) у цьому рядку.
 */

function countVowels(message) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < message.length; i += 1) {
    const letter = message[i];

    if (vowels.includes(letter)) {
      count += 1;
    }
  }

  return count;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Amazing")); // 3
console.log(countVowels("Javascript")); // 3
