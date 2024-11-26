function isEven(num) {
    return num % 2 === 0;
  }
  
for (let x = 0; x <= 10; x++) {
    console.log(`isEven(${x}): `, isEven(x));
  }
  
function multiply(num1, num2) {
    return num1 * num2;
  }
  
while (true) {
    let num1 = parseFloat(prompt("Input first number:"));
    let num2 = parseFloat(prompt("Input second number:"));
    if (num1 < 0 || num2 < 0) break;
    console.log(`multiply(${num1}, ${num2}): `, multiply(num1, num2));
}
  
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("reverseString('hello'):", reverseString("hello"));
  
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
        count++;
        }
    }
    return count;
}
console.log("countVowels('JavaScript'):", countVowels("JavaScript"));

function findMax(arr) {
    return Math.max(...arr);
}
console.log("findMax([4, 9, 2, 7, 5]):", findMax([4, 9, 2, 7, 5]));

function calculateFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
}
console.log("calculateFactorial(5):", calculateFactorial(5));
  
function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("isPalindrome('level'):", isPalindrome("level"));
  
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5]));
  
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log("capitalizeFirstLetter('javascript'):", capitalizeFirstLetter("javascript"));
  
function filterEvenNumbers(arr) {
    return arr.filter(isEven);
}
console.log("filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]):", filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  