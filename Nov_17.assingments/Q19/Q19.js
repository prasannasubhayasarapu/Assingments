//1----
let a=5
let b=7
console.log(`${a}+${b}=${a+b}`);

const name = "Alice";
const greeting = `Hello ${name}!
Welcome to our platform.
Have a great day!`;
console.log(greeting);


firstName = "John"
lastName = "Doe"
console.log(`${firstName}, ${lastName}`);

//2---
const square=(n)=>  n * n
console.log(square(5));


const obj = {
  value: 50,
  test() {               // ← regular function, not arrow
    console.log(this.value);
  }
};
obj.test(); // ➜ logs 50

//3---
const product = { name: "Pen", price: 10 };
const productCopy = { ...product };

const a1 = { x: 1 };
const b1 = { y: 2 };

const merged = { ...a1, ...b1 };
// Result: { x: 1, y: 2 }

function maxValue(...nums) {
  if (nums.length === 0) {
    throw new Error("At least one number is required");
  }
  return Math.max(...nums);
}

//4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a2, b2] = arr;

// a → 10
// b → 20


const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

// brand → "Dell"

const info = {};
const name1 = info.user?.name1;

console.log(name1); // undefined (no error)
for (var i = 0; i < 3; i++) {}
console.log(i);//3


for (let j = 0; j < 3; j++) {}
console.log(j);//j is not defined

//Does Not Make Objects Immutable
//Improves Code Clarity and Safety
//Encourages Functional Programming Practices

//==Ternary Operator – Practice
let speed=(kmph > 60)?"Fast":"Normal";
console.log(speed);

let age=(age>=18)?"Adult":"minor"

function checkSign(num) {
  return num > 0 
    ? "Positive" 
    : num === 0 
      ? "Zero" 
      : "Negative";
}

console.log(checkSign(5));   // "Positive"
console.log(checkSign(0));   // "Zero"
console.log(checkSign(-3));  // "Negative"

//7. Spread, Rest & Arrays

const nums = [1,2,3];
let n=[4,5]
console.log(...nums,...n);

a = ["x","y"];
b = ["z"];
console.log(...a,...b);


function printNames(...names) {
  return names;
}

// Example usage:
console.log(printNames("A", "B", "C")); // ["A", "B", "C"]

//8. Object Destructuring & Shorthand

const user1 = { id: 101, status: "active" };
const { id2, status } = user1;
console.log(id2);     // 101
console.log(status); // "active"

const id = 101;
const role = "admin";
const user = { id, role };

const name3 = "Alice";
const age2 = 30;

const user3 = {
  name,         // shorthand for name: name
  age,          // shorthand for age: age
  greet() {     // method shorthand (instead of greet: function() { ... })
    return `Hello, I'm ${this.name}!`;
  }
};

// Example usage:
console.log(user.name);       // "Alice"
console.log(user.age);        // 30
console.log(user.greet());    // "Hello, I'm Alice!"

//==9. Template Literals (More Practice)

const message = `Today is ${new Date().toDateString()}`;
console.log(message);
// Example output: "Today is Tue Nov 25 2025"


const NAME = "Alex";
const SCORE = 85;

const result = `Hello ${NAME}, your score is ${SCORE}/100`;
console.log(result);
// Output: "Hello Alex, your score is 85/100"


//10. Arrow Function Shorthands
const add = (a, b) => a + b;
const isAdult = (age) => age >= 18;
const double = (num) => num * 2;


//11. Spread Operator (Arrays & Objects)

const original = [1, 2, 3];
const cloned = [...original];

// cloned → [1, 2, 3]
// This is a shallow copy—safe for primitives, but nested objects/arrays are shared.

const array = [1, 2, 3];
const newArr = [100, ...arr];

// newArr → [100, 1, 2, 3]

const obj1 = { name: "Laptop", price: 1000, brand: "Dell" };
const obj2 = { price: 1200, color: "silver" };

const merged1 = { ...obj1, ...obj2 };


//12. Optional Chaining (More Practice)
const user5 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

const city = user5.address?.city;
console.log(city); // "Bangalore"


const title = user.job?.title;
console.log(title); // undefined (no error)

const data = {
  user: null
};

// Without optional chaining:
// console.log(data.user.name); // ❌ TypeError: Cannot read property 'name' of null

// With optional chaining:
console.log(data.user?.name); // ✅ undefined (no error)
