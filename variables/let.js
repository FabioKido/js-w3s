/**
 * Block Scope
 * 
 * Before ES6 (2015), JavaScript did not have Block Scope.
 * JavaScript had Global Scope and Function Scope.
 * ES6 introduced the two new JavaScript keywords: let and const.
 * These two keywords provided Block Scope in JavaScript.
 */

// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
  let y = 4;
  console.log(x, y)
}

x = 3; // x (do bloco acima) can NOT be used here (x assume outro valor).
console.log(x, y) // ReferenceError: y is not defined.

// Variables declared with the var always have Global Scope.
{
  var z = 3;
}
// z CAN be used here
console.log(z); // 3

// Variables defined with let can not be redeclared. 
let d = "John Doe";
let d = 0; // (SyntaxError: Identifier 'd' has already been declared).

// Variables defined with var can be redeclared.
var n = "John Doe";
var n = 0;

// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block.
var m = 10;
// Here m is 10

{
  var m = 2;
  // Here m is 2
}

// Here m is 2

// Redeclaring a variable using the let keyword can solve this problem.
// Redeclaring a variable inside a block will not redeclare the variable outside the block.
let q = 10;
// Here q is 10

{
  let q = 2;
  // Here q is 2
}

// Here q is 10

// With let, redeclaring a variable in the same block is NOT allowed:
var x = 2;   // Allowed
let x = 3;   // Not allowed

{
  let x = 2;   // Allowed
  let x = 3;   // Not allowed
}

{
  let x = 2;   // Allowed
  var x = 3;   // Not allowed
}

// Redeclaring a variable with let, in another block, IS allowed:
let x = 2;   // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;    // Allowed
}

/**
 * Let Hoisting
 * 
 * Variables defined with var are hoisted to the top and can be initialized at any time.
 * Meaning: You can use the variable before it is declared.
 */

// This is OK:
carName = "Volvo";
var carName;

// Variables defined with let are also hoisted to the top of the block, but not initialized.
carName = "Saab"; // ReferenceError: Cannot access 'carName' before initialization.
let carName = "Volvo";