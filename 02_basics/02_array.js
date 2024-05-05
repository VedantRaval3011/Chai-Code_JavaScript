const footballPlayers = ["Messi","Bergkamp","Reus"]
const cricketPlayers = ["Virat","Dhoni","Rohit"]

// footballPlayers.push(cricketPlayers) //not used generally

// console.log(footballPlayers);

// console.log(footballPlayers[3][1]); //not good

// const allFootballers = footballPlayers.concat(cricketPlayers)
// console.log(allFootballers); // better then push

                         //spread operator
const alNewFootballers = [...footballPlayers, ...cricketPlayers] //this is used for concatenation of array , better than push and concat 
console.log(alNewFootballers);

const anotherArray = [1, 2, 3,[4, 5, 6], 7, [6, 7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("vedant"));
// console.log(Array.from("vedant")); //converts string into array
// console.log(Array.from({name:"ved"})); //interview//it gets confued whether to create key array or values array hence it return null

let score1 = 100
let score2 = 200
let score3 = 500

console.log(Array.of(score1,score2,score3));// converts all this separate variables into singlw array consisting of them
