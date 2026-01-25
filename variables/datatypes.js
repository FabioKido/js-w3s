/**
 * Javascript Data Types
 * 
 * A JavaScript variable can hold 8 types of data.
  * String:     A text of characters enclosed in quotes
  * Number:     A number representing a mathematical value
  * Bigint:     A number representing a large integer
  * Boolean:    A data type representing true or false
  * Object:     A collection of key-value pairs of data
  * Undefined:  A primitive variable with no assigned value
  * Null:       A primitive value representing object absence
  * Symbol:     A unique and primitive identifier
 */

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345);

// Boolean
let x = true;
let y = false;

// Object
const person = {
    firstName:"John", 
    lastName:"Doe"
};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let carName;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

// You can use the JavaScript typeof operator to find the type of a JavaScript variable.
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'; // Double quotes inside single quotes

// All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals:
let x1 = 34.00;
let x2 = 34; // Without decimals

/**
 * Exponential Notation
 * Extra large or extra small numbers can be written with scientific (exponential) notation.
*/

let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

// JavaScript booleans can only have one of two values: true or false
let x = 5;
(x == 8); // equals false
(x != 8); // equals true

// All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.

// An empty value has nothing to do with 'undefined' datatype:
let car = "";    // The value is "", the typeof is "string"