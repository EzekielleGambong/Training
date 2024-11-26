const square = (num) => {
    console.log(num * num);
};
square(5);

const name = "Ezi";
const age = 30;
console.log(`Welcome ${name}! You are ${age} years old.`);

const person = { fName: "Ezi", lName: "Gambong" };
const { fName, lName } = person;
console.log("First Name:", fName);
console.log("Last Name:", lName);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
console.log("Merged Array:", mergedArr);

const calculateArea = (length = 1, width = 1) => length * width;
console.log("Area of Rectangle:", calculateArea(10, 5));
console.log("With default values:", calculateArea());

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    output() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const newOutput = new Person("Ezi", 22);
newOutput.output();
