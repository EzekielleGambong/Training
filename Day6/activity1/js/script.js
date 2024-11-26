const greet = function() {
    console.log("Hello! Good day!");
};
greet();

const add = function(x, y) {
    return x + y;
};
const sum = add(5, 3);
console.log("Sum:", sum);

const multiply = function(x, y) {
    return x * y;
};
const product = multiply(4, 2);
console.log("Product:", product);

const isEven = function(num) {
    return num % 2 === 0;
};
const even = isEven(6);
console.log("Is 6 even?", even);

const square = function(num) {
    return num * num;
};
const squaredValue = square(3);
console.log("Square of 3:", squaredValue);

const fullName = function(firstName, lastName) {
    return `${firstName} ${lastName}`;
};
const name = fullName("John", "Doe");
console.log("Full Name:", name);

const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const capitalizedString = capitalize("javascript");
console.log("Capitalized String:", capitalizedString);
