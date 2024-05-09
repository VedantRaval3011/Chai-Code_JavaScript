//this are notes for interview

// Primitive Data Type

// 7 category : string, number, boolean, null, undefined, symbol, BigInt

//JavaScript is dynamically typed language  , loosely typed
let CustomerId = 1523;
CustomerId = "1523A";
// In this example, the variable a is initially assigned the number 1523.
// However, on the second line, the variable is assigned the string "1523A".
// This is because JavaScript is a dynamically typed language, and the data type of a variable can change at any time.

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 112121454523215451111131n; //n means it's bigInt

// Refrence Type (Non-primitive Data Type)

// Array, Objects, Functions

const heros = ["Shaktiman", "Nagraj", "doga"]

let myObj = {
    name: "Vedant",
    age: 20,
}

const Myfunction = function(){
    console.log("Hello World!");
}



// refer this link as well
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


//**************************************************** */
// Memory are of 2 types : Stack and Heap

// stack (primitive) , heap(non-primitive)

let myChannel = "pitch_perfect_editz"

let anotherName = myChannel
anotherName ="affluence.ar"

console.log(anotherName);



// Memory are of 2 types : Stack and Heap

// stack (primitive) , heap(non-primitive)

let myChannel = "pitch_perfect_editz"

let anotherName = myChannel
anotherName ="affluence.ar"

// console.log(myChannel);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@xyz"
}

let userTwo = userOne

userTwo.email = "vedant@google.com"

console.log(userOne.email);
console.log(userTwo.email);

