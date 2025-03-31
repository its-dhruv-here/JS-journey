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


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// Primitive -> Stack   &  Non primitive -> Heap

let my_name = "Dhruv" ;
let another_name = my_name ;

another_name = "Aditya" ;                       

console.log(my_name);           // Output: Dhruv
console.log(another_name);      // Output: Aditya
/*
Explanation:
1.	my_name stores the value “Dhruv”.
2.	another_name = my_name; → This copies the value of my_name into another_name.
->	Now, another_name is a separate copy of "Dhruv", not linked to my_name.
3.	another_name = "Aditya"; → We change another_name to "Aditya", but my_name remains “Dhruv”` because primitive values (like strings) are stored separately. in stack
*/



let userOne_details = {
    name : "Raghu" ,
    email_id : "xyz@google.com",

}
let usertwo_details = userOne_details ;

usertwo_details.name = "Naman" ;

console.log(userOne_details);       // Output: { name: "Naman", email_id: "xyz@google.com" }
console.log(usertwo_details);       // Output: { name: "Naman", email_id: "xyz@google.com" }

/*
Explanation:
	1.	userOne_details is an object, storing name and email_id.
	2.	usertwo_details = userOne_details;
	->	This does not create a new copy!
	->	Instead, usertwo_details now refers to the same object in memory as userOne_details.
	3.	usertwo_details.name = "Naman";
	->	Since both variables refer to the same object, changing usertwo_details.name also affects userOne_details.name.
*/
