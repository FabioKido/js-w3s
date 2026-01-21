/**
 * JavaScript Statements (ou declarações/instruções)
 * 
 * JavaScript statements are composed of:
  * Values, Operators, Expressions, Keywords, and Comments. 
  * The statements are executed, one by one, in the same order as they are written.
 */

// Semicolons (ou ponto e vírgula) separate JavaScript statements.
let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4

// Ending statements with semicolon (;) is not required, but highly recommended.
let a, b, c;  // Declare 3 variables
a = 5;        // Assign the value 5 to a
b = 6;        // Assign the value 6 to b
c = a + b;    // Assign the sum of a and b to c

// When separated by semicolons (;), multiple statements on one line are allowed:
a = 5; b = 6; c = a + b;

/**
 * JavaScript White Space
 * 
 * JavaScript ignores multiple spaces. You can add white space to your script to make it more readable.
 * A good practice is to put spaces around operators ( = + - * / ).
 */

let person = "Hege";
let person2="Hege";
let d = e + f;

/**
 * JavaScript Line Length (ou comprimento da linha) and Line Breaks
 * 
 * For best readability, programmers often like to avoid code lines longer than 80 characters.
 * If a JavaScript statement does not fit on one line, the best place to break it is after an operator.
 */

document.getElementById("demo").innerHTML =
"Hello Dolly!";

/**
 * JavaScript Code Blocks
 * 
 * JavaScript statements can be grouped together in code blocks, inside curly brackets {...} (ou chaves).
 * The purpose of code blocks is to define statements to be executed together.
 * One place you will find statements grouped together in blocks, is in JavaScript functions.
 */

function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}