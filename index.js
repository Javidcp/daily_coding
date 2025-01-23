//* Day 2

//  find the largest number
const arFn = (...numbers) => {
    let res = numbers.sort((a, b) => b - a)[0];
    return res
}

console.log(arFn(5,54,65,25,3,34));



// double the numbers
const num = [2,5,8,10,20]
let result = num.map(num => num * 2);
console.log(result);



// Even numbers
function evenNumbers(num1) {
    let result = num1.filter(num => num % 2 === 0);
    return result;
}
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




//* Day 3



//  Write an object using an object literal to represent a book with properties: title, author, and a method read() that prints the title.
const book = {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    read: function() {
        console.log(this.title);
    }
}
book.read(); //  Harry Potter



//  Create an object using the new keyword and add the properties name, age, and a method introduce() dynamically.
const person = new Object();
person.name = 'javid';
person.age = 20;
person.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age}`)
}

console.log(person);




//  Write a constructor function called Car that takes brand and year as arguments and includes a method getAge() that calculates the car's age.
function car(brand, year) {
    this.brand = brand;
    this.year = year;
    this.getAge = function() {
        return 2025 - this.year;
        }
}

let car1 = new car('defender', 2021)

console.log(car1);
console.log(car1.getAge());




// Using an object literal, create a user object with a method login(). Then rewrite the same object using an object constructor.
const user = {
    name: 'javid',
    password: 1234,
    login: function() {
        console.log(`${this.name} is loged in!`);
    }
}

user.login();



function loged(name, password) {
    this.name = name;
    this.password = password;
    this.login = function() {
        console.log(`${this.name} is loged in!`);
        }
}

let user1 = new loged('javid', 1234);
user1.login();







//* Day 4
//  Prototype
function animal(name)  {
    this.name = name;
}
animal.prototype.eat = function () {
    console.log(`${this.name} is eating!`);
}
let dog = new animal('dog');
dog.eat();
console.log(dog.hasOwnProperty("eat"));



//  Closure
function makeCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter2());    // 1




//  Local Storage
let objLoc = {
    name: 'javid',
    age: 20
}

function store() {
    localStorage.setItem(objLoc,'local')
}



// Higher Order Function
function higherOrderFunction(a, b, callBack) {
    return callBack(a, b);
}

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;

console.log(higherOrderFunction(2, 4, add));
console.log(higherOrderFunction(2, 4, subtract));





//* Day 5

//  Iterate over all keys and values in a Map
const map = new Map([
    ['name','Jhon'],
    ['age',30]
])
map.forEach((value, key) => console.log(`${key} : ${value}`))


// Frequency checking
const str = 'hello world';
let checkFreq = new Map();

for (let char of str) {
    checkFreq.set(char,(checkFreq.get(char) || 0)+ 1)
}
console.log(checkFreq);



//  Write a code where bind is used to create a new function that always greets "Alice" with "Hello".
function greeting(person, greet) {
    console.log(`${greet} ${person}!`);
}

const morn = greeting.bind(null,'Alice','Hello')
morn();



//  Remove duplicate elements from an array using a Set
let arr = [1,2,3,1,4,5];

let setArr = new Set(arr);
console.log(setArr);




//  A function is passed as an argument to another function
function addition(a, b){
    return a + b;
}

function sum (a, b, callBack){
    return callBack(a, b);
}
console.log(sum(2, 4, addition));








//* Day 6

// Random number taking

function randomNum (a, b) {
    return Math.floor(Math.random() * (a - b + 1) + b);
}
console.log(randomNum(20,10))


