console.log("Hi");

const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("---------");

for (let i of arr) {
    console.log(i);
}

console.log("---------");

for (let i in arr) {
    console.log(i);
}

const person2 = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        let x = document.getElementById("demo");
        x.innerHTML = this.firstName + " " + this.lastName;
    },
};

person2.display();

const person = {
    fullName: function (city, country) {
        return (
            this.firstName + " " + this.lastName + "," + city + "," + country
        );
    },
};

const person1 = {
    firstName: "John",
    lastName: "Doe",
};

person.fullName.apply(person1, ["Oslo", "Norway"]);

let x = -1;
do {
    console.log("HELLO");
    x--;
} while (x > 0);

for (let x = 0; x < 5; x++) {
    console.log("Hello world");
}
