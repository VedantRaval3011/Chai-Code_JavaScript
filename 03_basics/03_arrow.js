const user = {
    username: "vedant",
    price:"999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //it works because this. is always used inside an object
        console.log(this); 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //this refers to object {} , but in browser this refers to window object , 
//window is global object in browser //asked in interview


// function chai(){
//     let username= "vedant"
//     console.log(this.username);
//     //this. can be used inside object , there is object hence this.username is undefined
// }

// chai()

// const chai = function(){
//     let username = "vedant"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "vedant"
//     console.log(this);
// }

// chai()

const addTwo = (num1,num2) =>{
    return num1 + num2;//explicit return used //whenevr we use return it's explicit
}

// const addThree = (num1,num2,num3) =>  num1 + num2 + num3; //implicit return , no need to write return because it's one line statement

// const addThree = (num1,num2,num3) =>  (num1 + num2 + num3); // whenever {} paranthesis is used we need to add return statement , but here in () no need of return statement

const addThree = (num1,num2,num3) =>  ({username : "vedant"}); //parenthesis () are necessary to return object


// console.log(addTwo(3,4));

// const myArray = [2,6,4,5]

// myArray.forEach()