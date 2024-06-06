/**
 * Створіть функцію sumNumbers, яка приймає число (n)
 * і повертає суму всіх чисел від 1 до n.
 */

function sumNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum;
}

console.log(sumNumbers(10)); // 55
console.log(sumNumbers(5)); // 15
