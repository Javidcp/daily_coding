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


// Factorial
function factorial (num) {
    if ( num === 0 || num === 1 ) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5));



// max find in random number
const num1 = Math.floor(Math.random() * (1 * 10));
const num2 = Math.floor(Math.random() * (1 * 10));
const num3 = Math.floor(Math.random() * (1 * 10));
console.log(`${num1} - ${num2} - ${num3}`);
console.log(Math.max(num1,num2,num3));








// Arrary destructuring 
let language = ["HTML", "CSS", "JAVASCRIPT", "REACT", "MONGO-DB", "EXPRESS-JS", "NODE-JS"];

let [html, css, js, react, ...backEnd] = language;

console.log(html);
console.log(js);
console.log(backEnd);


// Closure
function outerFn () {
    let a = 10;
    function innerFn () {
        console.log(a);
    }
    innerFn()
}
outerFn()



// stack
function first() {
    console.log("first");
    second();
}

function second() {
    console.log("second");
    third();
}

function third() {
    console.log("third");
}

first()

/* 

FIRST fn pushed to stack
SECOND fn is inside FIRST fn -> pushed to stack
THIRD fn is inside SECOND fn -> pushed to stack
THIRD fn is called -> popped from stack
SECOND fn is called -> popped from stack
FIRST fn is called -> popped from stack

*/





// Exception Handling

console.log("Started");

let ab, bc, res;

try {
    console.log("On Log");
    
    ab = firstInit();
    bc = secondInit();
    res = sumInit(ab, bc);
}  finally {
    console.log("On Finally");
}

console.log(res);


console.log("Ended");


function firstInit () {
    console.log("first");
    // fdtgw()
    // throw 'Ente Swantham error'
    // throw new Error ('error vannu')
    return 10;
}

function secondInit () {
    console.log("second");
    
    return 15;
}

function sumInit (ab, bc) {
    return ab + bc;
}




// Hoisting

// console.log(a);
// let a = 10;

console.log(b);
var b = 10;



mainFn();

function mainFn() {
    console.log("hey");
}


// errorFn();

// const errorFn = function() {
//     console.log("hello");
    
// }





// Adv Day 3

// shadowing
let x = 10;

{
    let x = 20;
    console.log(x);
}

console.log(x);


// illegal shadowing
// let r = 10;
// {
//     var r = 20;
//     console.log(r);
// }
// console.log(r);




// coercion

let assest = 10;
const resu = String(assest);
console.log(resu, typeof resu);


let boo = 3;
const bool = Boolean(boo)
console.log(bool, typeof bool);


let tru = true;
const non = Number(tru);
console.log(non, typeof non);




//Adv 4 

//  class

class Students {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }

    // this Static function method another way is down
    static primitive (...arg) {
        let arr = arg.map(item => item.year);
        console.log(Math.min(...arr));
    }

    getName() {
        return this.name;
    };

    getAge() {
        return new Date().getFullYear() - this.year;
    };
};

let student1 = new Students('Javid',2004);
let student2 = new Students('Fazil',2005);
let student3 = new Students('Abdu',2003);

console.log(student1.getAge());
console.log(student2);

Students.primitive(student1, student2, student3)




// Shallow copy
const original = { name: "Alice", age: 26};
const shallowCopy = original;
shallowCopy.age = 20

console.log(original); // Output: 30 (because they share the same reference)
console.log(shallowCopy);


// Deep copy

const original1 = { name: "Cook", age: 25, skill: {primary: "full-stack"}};
const deepCopy = {...original1};
deepCopy.age = 35;

console.log(original1);
console.log(deepCopy);




// Memoization

function findSum(...val) {
    return val.reduce((total, curr) => total + curr);
}
const memo = (addition) => {
    const cache = {};  // Stores computed results
    return function (...arg) {
        const key = JSON.stringify(arg); // Convert array to a unique string key
        if (cache[key]) {  // Check if result is already cached
            console.log(cache);
            console.log("return result");
            return cache[key]; // Return cached result
        } else {
            console.log("continue execution");
            const result = addition(...arg); // Compute new result
            cache[key] = result;  // Store result in cache
            return result;
        }
    }
}


const calculate = memo(findSum);

console.log(calculate(4, 5));
console.log(calculate(4, 5));
console.log(calculate(4, 5));




// Adv Day 6

// Promise

const fetchData = () => {
    return new Promise ((resolve, reject) => {
        console.log("Fetching loading...");

        setTimeout (() => {
            let success = Math.random() > 0.3;

            if (success) {
                resolve("Fetching data successful")
            } else {
                reject("Fetching data is failed")
            }
        }, 2000)
    })
}


fetchData()
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((error) => {
        console.log("Failed:", error);
    })
    .finally(() => {
        console.log("Request completed");
    })












    const delayedMessage = (msg, delay) => {
        return new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve(msg)
            }, delay)
        })
    }
    
    const fetchingData = async () => {
        try {
            const result = await delayedMessage("Hello world!", 2000)
            console.log(result);
            
        } catch(error) {
            console.log(error);
        }
    }
    
    fetchingData()