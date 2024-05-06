
                        //parameters
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result
    return number1 + number2;
    // console.log("vedant");//unreachable code
}
                        //arguments
const result = addTwoNumbers(3,5)

// console.log(result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return // now below retun statement will just not work
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("vedant"));
// console.log(loginUserMessage("vedant")); //asked in interview //not null it's undefined


function claculateCartPrice(val1,val2,...num1){ //asked in interview
    return num1;
}   


// console.log(claculateCartPrice(200,400,500,2000));

const user = {
    username: "vedant",
    price: 932
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200,300,400,800]

function returnSomeValue(getArray){
    return getArray[1]
}

console.log(returnSomeValue(myNewArray));

