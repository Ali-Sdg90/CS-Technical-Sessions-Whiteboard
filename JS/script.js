"use strict";

// در سطح گلوبال
console.log(this); // undefined

function test1() {
    console.log(this); // undefined
}

const test2 = () => {
    console.log(this);
};

test1();
test2();

let user = {
    name: "zahra",
    age: 24,
};

function showUser(city) {
    // console.log(this.age, city);

    this.city = city;
}

showUser.call(user);

showUser.apply(user, ["tabriz"]);

// console.log(user);

let user1 = {
    name: "zahra",
    age: 24,
};

function showUser() {
    // console.log(this); //24 undefined
}

showUser.bind(user1);

const person = {
    name: "Ali",
    age: 21,
    greet: function (greeting) {
        console.log(
            `${greeting}, my name is ${this.name} and I am ${this.age} years old.`
        );
    },
};

function welcome(greeting1, greeting2) {
    console.log(`${greeting1} and ${greeting2}, I am ${this.name}.`);
}

const newGreetFunction = person.greet.bind(person, "Hello");
newGreetFunction(); // Hello, my name is Ali and I am 21 years old.

welcome.call(person, "Hi", "Aloha"); // Hi and Aloha, I am Ali.

welcome.apply(person, ["Hi", "Aloha"]); // Hi and Aloha, I am Ali.
