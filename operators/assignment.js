/**
 * JavaScript Assignment Operators
 * 
 * Assignment operators assign (atribui) values to JavaScript variables.
 */

// The Simple Assignment Operator '=' assigns a simple value to a variable.
let x = 10 + y;
let z = 5;

// The Addition Assignment Operator adds a value to a variable.
let x = 10;
x += 5;     // 15

// The Subtraction Assignment Operator subtracts a value from a variable.
let x = 10;
x -= 5;     // 5

// The Multiplication Assignment Operator multiplies a variable.
let x = 10;
x *= 5;     // 50

// The Exponentiation Assignment Operator raises a variable to the power of the operand.
let x = 10;
x **= 5;    // 100000

// The Division Assignment Operator divides a variable.
let x = 10;
x /= 5;     // 2

// The Remainder Assignment Operator (módulo) assigns a remainder to a variable.
let x = 10;
x %= 5;     // 0

/**
 * String Assignment
 * 
 * Two assignment operators can assign values to strings:
 * The Simple Assignment Operator assigns a simple value to a string.
 * The Addition Assignment Operator adds a value to a string.
 */

// The Simple Assignment Operator assigns a value to a variable.
let text = "Hello";
console.log(text);      // Hello

// The Addition Assignment Operator Can also be used to add strings.
let text = "Hello"; text += " World";
console.log(text);      // Hello World


/**
 * The &&= Operator
 * 
 * The Logical AND assignment operator is used between two values.
 * If the first value is true, the second value is assigned.
 */

let x = true;
let y = x ||= 10;   // y é igual a 10

let x = 0;  // Zero é um valor 'falsie'
let y = x &&= 10;   // y é igual a 0

/**
 * The ||= Operator
 * 
 * The Logical OR assignment operator is used between two values.
 * If the first value is false, the second value is assigned.
 */

let x = false;
let y = x ||= 10;   // y é igual a 10

let x = true;
let y = x ||= 10;   // y é igual a true

/**
 * The ??= Operator
 * 
 * The Nullish coalescing assignment operator is used between two values.
 * If the first value is undefined or null, the second value is assigned.
 */

let x;
let y = x ??= 10;   // y é igual a 10

let x = 0;
let y = x ??= 10;   // y é igual a 0

// The Logical operators is an ES2020 feature.

/**
 * The Spread (...) Operator
 * 
 * The ... operator splits iterables into individual elements.
 */

let text = "12345";

let min = Math.min(...text);    // 1
let max = Math.max(...text);    // 5