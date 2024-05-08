// Javascript execution conteext

// 1)Global execution context
// 2)Function execution context
// 3)Eval execution context //optional


// 2 phases
//1)Memory creation phase or creation phase
//2)Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(3,5)


// 1st phase global execution phase -> this


//2nd phase
//meemory creation phase // val1 -> undefined //val2 -> undefined
//addNum->definition //result1->undefined //result2->undefined

// 3rd phase
// execution phase
// val1<-10
// val2<-5
// addNum-> creates another execution context-> new variable environment + execution thread
//how many times you create function you have to do both global execution phase and memory creation 
//Now for memeory phase for addNum
//val1->undefined
// val2->undefined
//total -> undefined

//now execution context for addNum
//num1->10
//num2->5
//total->15 now it return to global exetion context(phase1)
// Result1->15


// Now for result2
// Now again we get to do the first 2 phase and it's done


// Javascript uses LIFO(last in first out) for call stacks