//array

const myArr = [5, 1, 2, 3, 4, 5, true, "vedant"]

const myHeros = ["Shaktiman","nagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0]);


//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//slice, spice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)//this doesnot manipulate original array and it doesnot include the range number in (1,3) 3 is range

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //this manipulate the array and does include the range
console.log("c ", myArr);
console.log(myn2);