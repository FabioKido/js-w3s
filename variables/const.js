/**
 * Javascript Const
 * 
 * Variables defined with const cannot be Redeclared.
 * Variables defined with const cannot be Reassigned.
 * Variables defined with const have Block Scope.
 */

const PI = 3.141592653589793;
PI = 3.14;      // TypeError: Assignment to constant variable.
PI = PI + 10;   // This will also give an error

// JavaScript const variables must be assigned a value when they are declared:
const PI2 = 3.14159265359; // Correto

const PI3; // Incorreto
PI3 = 3.14159265359;

/**
 * Always declare a variable with const when you know that the value should not be changed.
 * 
 * Use const when you declare:
  * A new Array;
  * A new Object;
  * A new Function;
  * A new RegExp.
 */

const arr = [];
const obj = {};
const func = function func() {};

/**
 * The keyword const is a little misleading.
 * It does not define a constant 'value'. It defines a constant 'reference' to a value.
 * 
 * Because of this you can NOT:
  * Reassign a constant value;
  * Reassign a constant array;
  * Reassign a constant object
 * But you CAN:
  * Change the elements of constant array;
  * Change the properties of constant object.
 */

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
const cars2 = ["Volks", "Fiat", "Audi"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Ferrari");

// But you can NOT reassign the array
cars2 = ["Toyota", "Volvo", "Audi"];    // ERROR

// You can create a const object:
const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

const car2 = {type:"Fiat", model:"500", color:"white"};

// But you can NOT reassign the object
car2 = {type:"Volvo", model:"EX60", color:"red"}    // ERROR

// Declaring a variable with const is similar to let when it comes to Block Scope.
const x = 10;
console.log(x); // Here x is 10

{
    const x = 2;
    console.log(x); // Here x is 2
}

console.log(x); // Here x is 10

// Redeclaring an existing var or let variable to const, in the same scope, is not allowed:
var y = 2;     // Allowed
const y = 2;   // Not allowed

{
    let y = 2;     // Allowed
    const y = 2;   // Not allowed
}

{
    const y = 2;   // Allowed
    const y = 2;   // Not allowed
}

// Reassigning an existing const variable, in the same scope, is not allowed:
const z = 2;     // Allowed
z = 2;           // Not allowed
var z = 2;       // Not allowed
let z = 2;       // Not allowed
const z = 2;     // Not allowed

{
  const z = 2;   // Allowed
  z = 2;         // Not allowed
  var z = 2;     // Not allowed
  let z = 2;     // Not allowed
  const z = 2;   // Not allowed
}

// Redeclaring a variable with const, in another scope, or in another block, is allowed:
const f = 3;    // Allowed

{
    const f = 3;    // Allowed
}

{
    const f = 3;    // Allowed
}

// Variables defined with const are also hoisted to the top, but not initialized:
alert (carName);    // ReferenceError
const carName = "Volvo";