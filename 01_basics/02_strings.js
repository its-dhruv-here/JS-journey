const name = "Dhruv" ;
const age = 18 ;

console.log("Age of " + name + " is : " + age );      // Not recommended

console.log(`Age of ${name} is : ${age}`); 
 /*
 • More readable and recommended too || Modern way || String interpolation 
 • ${} (Template Interpolation) → This allows embedding variables and expressions inside the string.
 • here, `Age of ${name} is : ${age}` is the template literal.
 */



// In JavaScript, strings can be created in two ways:

// 1.	Using String Literals (Recommended) :
// const game_name = "PUBG"; // Simple string

// 2.	Using the new String() Constructor (Not Recommended)
// const game_name2 = new String("PUBG"); // String as an object



// Example: Issues with new String()
const game_name = "PUBG"; 
const game_name2 = new String("PUBG"); 

console.log(game_name === game_name2); 
// Output: false (Because game_name is a string, but game_name2 is an object)

console.log(typeof game_name); // Output: string
console.log(typeof game_name2); // Output: object
/*  
->	game_name is a primitive string stored in stack memory.
->	game_name2 is a string object stored in heap memory, so === (strict comparison) returns false.
*/



/*
-> When to Use new String()?
    Almost never!
	•	JavaScript automatically converts primitive strings to objects when needed (e.g., when calling methods like .toUpperCase()).
*/



// STRING METHODS  : They are the part of the JS string's prototype, which provides built-in functions to work with strings.



/* 
1. .trim() ; • removes leading(start) whitespaces and trailing(end) whitespaces from a string.
               • does not change the original string instead return a new one.
*/
const msg = "    I   ❤️   JS    " ;
console.log(msg.trim());  // I   ❤️   JS  (removes spaces from both ends)
let a = "   JavaScript   is  fun   ";
console.log(a.trim());  
// Output: "JavaScript   is  fun" (Spaces between words remain)

let b = "   Hello, World!   ";
console.log(b.trimStart());  
// Output: "Hello, World!   " (Only removes spaces from the start)
console.log(b.trimEnd());  
// Output: "   Hello, World!" (Only removes spaces from the end)



/*
2) .toUpperCase() / .toLowerCase() ; For case-insensitive comparisons
*/
const email_id = "ABCD@googly.com" ;
console.log(email_id.toLowerCase()) ; // abcd@googly.com



/*
3) .includes() ; •The .includes() method checks if a substring exists inside a string.
                 •returns true if found and false if not.
*/
const text = "I love JAVASCRIPT" ;
console.log(text.includes("JavaScript"));  // Output: false
console.log(text.includes("Python"));     // Output: false



/* 
4) .substring(start index, end index) ;
          • extract a portion of a string between two specified   index positions.
 	      •	startIndex → The position where extraction begins (included).
	      •	endIndex → The position where extraction stops (excluded).
	      •	If endIndex is not provided, it extracts the substring till the end of the string.
*/
let lang = "JavaScript";
console.log(lang.substring(0, 4));  
// Output: "Java" (Extracts characters from index 0 to 3)
console.log(lang.substring(4));  
// Output: "Script" (Extracts from index 4 till the end)


//  ---> If startIndex is greater than endIndex, JavaScript automatically swaps them.
let text1 = "Hello";
console.log(text1.substring(3, 1));  
// Output: "el" (substring(1, 3) because 3 > 1)


let text2 = "JavaScript";
console.log(text2.substring(-5, 4));  
// Output: "Java" (Negative index treated as 0)
console.log(text2.substring(4, 50));  
// Output: "Script" (50 is out of range, so it extracts till the end)



/*
5) .slice(start index, end index) ; • extracts a portion of a string
                                    • returns it as a new string, without modifying the original   string.
                                    • does not include the end index
*/
let str = "JavaScript";
console.log(str.slice(0, 4));  
// Output: "Java" (Extracts characters from index 0 to 3)
console.log(str.slice(4));  
// Output: "Script" (Extracts from index 4 till the end)

console.log(str.slice(-6));  
// Output: "Script" (Starts 6 characters from the end)
console.log(str.slice(-6, -3));  
// Output: "Scr" (Extracts from 6th-last to 3rd-last character)

console.log(str.slice(50, 60));  
// Output: "" (Empty string, because start index is out of range)

console.log(str.slice(4, 50));  
// Output: "Script" (End index out of range, extracts till end)



/*
6) .replace(searchValue, replaceValue) ; • find and replace a specified value.
                                         • not change original string
                                         • instead returns a new one
*/
const greet = "Good Morning" ;
console.log(greet.replace("Morning" , "Night")); // Good Night

let fruits = "Apple, Banana, Apple";
let newText = fruits.replace("Apple", "Mango");
console.log(newText);
// Output: "Mango, Banana, Apple" (Only the first "Apple" is replaced) by default only replaces the first match.



/*
7) .split(seperator , limit) ;  • divide the string into array of substrings based on specified seperator.
        	•	separator → The character(s) to split the string at (e.g., " ", ",", "-", etc.).
            •	limit (optional) → The maximum number of splits to make.
*/
let sentence = "Hello World JavaScript";
let words = sentence.split(" ");  
console.log(words);             // ["Hello", "World", "JavaScript"]
                                /* The string is split wherever there is a space (" ")
                                    Each word becomes a separate item in an array 
                                */
let fruitssss = "apple,banana,mango";
let fruitArray = fruitssss.split(",");
console.log(fruitArray);  //  ["apple", "banana", "mango"]

let word = "JavaScript";
let letters = word.split("");  
console.log(letters);          // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]






                                    

