/**
 * Comparison operators
 * 
 * Comparison operators are used to compare two values.
 * Comparison operators always (sempre) return true or false.
 */

let x = 5;

// '=='	equal to:
x == 8;      // false
x == 5;      // true
x == "5";    // true

// '===' equal value and equal type:
x === 5;	 // true
x === "5";	 // false

// '!=' not equal:
x != 8;	    // true

// '!==' not equal value or not equal type:
x !== 5;     // false
x !== "5";   // true

// '>' greater than:
x > 8;      // false

// '<' less than:
x < 8;      // true

// '>=' greater than or equal to:
x >= 8;     // false

// '<=' less than or equal to:
x <= 8;     // true

// Comparison operators can be used in conditional statements to compare values and take action depending on the result:
if (age < 18) text = "Too young to buy alcohol";

/**
 * JavaScript String Comparison
 * 
 * All the comparison operators above can also be used on strings:.
 */

let text1 = "A";
let text2 = "B";

// Is A less than B?
let result = text1 < text2; // true

// Note that strings are compared alphabetically:
let text1 = "20";
let text2 = "5";

// Is 20 less than 5?
let result = text1 < text2; // true (pois verifica apenas o 2, ou seja, primeira letra)

/**
 * Comparing Different Types
 * 
 * Comparing data of different types may give unexpected results.
 * When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
 * An empty string converts to 0. A non-numeric string converts to NaN which is always false.
 */

2 < 12;         // true	
2 < "12";       // true	
2 < "John";     // false	
2 > "John";     // false	
2 == "John";    // false	
"2" < "12";     // false	
"2" > "12";     // true	
"2" == "12";    // false

/**
 * When comparing two strings, "2" will be greater than "12".
 * Alphabetically 1 is less than 21.
 */

// To secure a proper result, variables should be converted to the proper type before comparison:
const age = Number("18");
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}