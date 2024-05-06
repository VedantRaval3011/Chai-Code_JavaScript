// let a = 300;

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a);
}


// console.log(a); // it won't print
// console.log(b);// it won't print
// console.log(c);//it will print but this is not preferable
//this is the reason to avoid 'var'

// console.log(a);

function one() {
    const username = "Vedant"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const username = "vedant"
    if(username === "vedant"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num) {
    return num + 1;
}


addTwo(5)
const addTwo = function(num){
    return num + 2;
}





