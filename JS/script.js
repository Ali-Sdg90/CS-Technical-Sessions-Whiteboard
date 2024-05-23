console.log("Hi");

// if (x > 3) {
//     x = 4;
// } else {
//     x = 1;
// }

// x > 3 ? (x = 4) : (x = 1);

// console.log(typeof 34);

// export const sum = (num1, num2) => {
//     return num1 + num2;
// };

// export default sum;

let hi = 20;

console.log(hi);

hi = hi + 10;

const rima = document.querySelector("#rima");

rima.textContent = hi;

function sayHi(text) {
    return "Hi " + text;
}

// const sayHi = (text) => {
//     return "Hi " + text;
// };

console.log(sayHi("Amir"));

let calculator = {
    add: function (a, b) {
        return a + b;
    },

    multiply: function (a, b) {
        return a * b;
    },
};

console.log(calculator.add());
console.log(calculator.multiply(2, 6)); // 12

var person = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
    },
    25: "hi",
};

const a = "address";

const b = "city";

console.log(person[a][b]);

console.log(person[25]);
