// +++++++++++++++++++++++ NUMBERS ++++++++++++++++++++++++++++//
const marks = 90 ;
console.log(marks);

const new_m = new Number(50) ;          // Number object is created
console.log(new_m);

const str = new_m.toString() ;  // since new_m it has become string, it will have all string methods.
console.log(str.length);  // 2

console.log(new_m.toFixed(2));  // Rounds to n decimal places // Output : 50.00

const other_num = 23.440 ;

console.log(other_num.toPrecision(2));   // Formats the number as a string with n total         significant digits

const hundreds = 1000000 ;
console.log(hundreds.toLocaleString());  // Output : 1,000,000 || The toLocaleString() method formats a number according to a specific locale (language + region) and returns it as a string. This is useful for displaying numbers in different currency, number formatting, and digit groupings.

let num = 1234567.89;
console.log(num.toLocaleString()); // Default (based on system locale)
console.log(num.toLocaleString("en-US")); // "1,234,567.89" (US format)
console.log(num.toLocaleString("de-DE")); // "1.234.567,89" (German format)
console.log(num.toLocaleString("hi-IN")); // "12,34,567.89" (Indian format)


// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++ //

// The Math object in JavaScript is a built-in object that provides various mathematical functions and constants.

console.log(Math.abs(-29));

console.log(Math.PI); // 3.141592653589793   || Value of PI
console.log(Math.E);  // 2.718281828459045   || Euler's number   


console.log(Math.round(4.5)); // 5       || Rounds to the nearest integer
console.log(Math.ceil(4.1));  // 5       || Rounds up to the next integer
console.log(Math.floor(4.9)); // 4       || Rounds down to the previous integer
console.log(Math.floor(-4.1));  // -5
console.log(Math.trunc(4.9));   // 4     || Just removes decimal
console.log(Math.trunc(-4.1));  // -4    || Just removes decimal (towards zero)


console.log(Math.min(7,9,5,3));
console.log(Math.max(7,9,5,3));


// Math.random() ; --> returns a pseudo-random floating-point number in the range 0 (inclusive) to 1 (exclusive).

