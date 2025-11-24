// a)
const username = "John";
const course = "JavaScript Fundamentals";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// b)
const name = "Sam";
const age = 21;
const student = {
    name,
    age,
    greet() {
        console.log("Hello");
    }
};

// c)
const getFullName = (first, last) => `${first} ${last}`;