// Primitive - Stored by value and are immutable.

// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt

const marks = 80 
const percentage = 95.6

const is_passed = true

const outside_Temp = null
let user_name ;

const id = Symbol('325') ;
const anotherId = Symbol('235') ;

console.log(id===anotherId);    // false

// Non Primitive - Stored by reference & are mutable.

// Arrays, Objects, Functions

const chaitypes = ["Ginger Tea", "Lemon Tea", "Oolong Tea"] ;   // array

let data = {                       // object
    f_name : "Dhruv" ,
    l_name : "Mittal",
}


const my_func = function(){                         // function
     console.log("Hello from Dhruv");
}

my_func() ;             // calling of function


console.log(typeof anotherId);   // we cann use typeof to get to know about the type.
