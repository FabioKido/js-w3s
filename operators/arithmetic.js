/**
 * JavaScript Arithmetic Operators
 * 
 * Arithmetic operators perform arithmetic on numbers (literals or variables).
 */

// Adição
let x = 100 + 50;

// Subtração
console.log(5 - 3);

// Multiplicação
let c = a * b;

// Exponenciação
let w = 5 ** 2  // 5 * 5 = 25
Math.pow(5,2);  // Produces the same result as 5 ** 2.

// Divisão
let x = 5;
let y = 2;
let z = x / y;

// Modulu
5 % 2 // Retorna '1'! The modulus operator (%) returns the division remainder.

// Incremento
let f = 5;
f++;    // 6

// Decremento
let h = 5;
h--;    // 4

// Expressions
let y = (100 + 50) * a;

/**
 * Operator Precedence
 * 
 * Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
 * And (as in school mathematics) the precedence can be changed by using parentheses.
 */

// When using parentheses, the operations inside the parentheses are computed first:
let e = (100 + 50) * 3;     // 450

// When many operations have the same precedence, they are computed from left to right:
let x = 100 + 50 - 3;   // 147

// Full list of operator precedence values: https://www.w3schools.com/js/js_precedence.asp