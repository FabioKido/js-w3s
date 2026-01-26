/**
 * JavaScript Operators
 * 
 * Operators are for Mathematical and Logical Computations
 */

// The Assignment Operator (=) assigns a value to a variable:
let x = 5;
let y = 2;  // Assign the value 2 to y
let z = x + y;  // Assign the value x + y to z

// Arithmetic Operators are used to perform arithmetic on numbers:
let a = 3;
let x = (100 + 50) * a;

/**
 * JavaScript String Addition
 * 
 * When used on strings, the '+' operator is called the concatenation operator.
 */

// The '+' can also be used to add (concatenate) strings:
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;    // 'John Doe'

// The += assignment operator can also be used to add (concatenate) strings:
let text4 = "What a very ";
text4 += "nice day";
console.log(text4)  // What a very nice day

// Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".
let f = "Hello" + 5; // 'Hello5'

// The Addition Assignment Operator (+=) adds a value to a variable.
let x = 10;
x += y	// x = x + y
x += 5; // 15

/**
 * JavaScript Comparison Operators
 * 
 * Comparison operators are used to compare two values.
 * Comparison operators always return 'true' or 'false'.
 */

let x = 5;
let result = x > 8; // false

// All the comparison operators above can also be used on strings:
let text1 = "A";
let text2 = "B";

// Note that strings are compared alphabetically.
let result = text1 < text2; // true

/**
 * JavaScript Logical Operators
 * 
 * &&	logical 'and'
 * ||	logical 'or'
 * !    logical 'not'
*/