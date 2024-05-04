const name = "Vedant"
const repoCount = 50 

// console.log(name + repoCount + " Value"); //not recommended

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //better way to write string

const gameName = new String('Vedant-Game-two')
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
// console.log(newString);


const anotherString = gameName.slice(-10,4)
// console.log(anotherString);

const newStringOne = "  vedant  "

// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://vedant.com/vedant%20raval"

// console.log(url.replace('%20','_'));

// console.log(url.includes('vedant'));

console.log(gameName.split('-'));

