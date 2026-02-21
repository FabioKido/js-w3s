/**
 * The JavaScript if Statement
 * 
 * Use the JavaScript if statement to execute a block of code when a condition is true.
 * Note that if is in lowercase letters. Uppercase letters (If or IF) will generate a JavaScript error.
 */

// Make a "Good day" greeting if the hour is less than 18:00:
const hour = 7;

if (hour < 18) {
  greeting = "Good day";
}

console.log(greeting);

// Drive
let age = 16;
let country = "USA";
let text = "You can Not drive";

if (age >= 18) {
  text = "You can drive";
}

console.log(text);

/**
 * Nested if (aninhado)
 * 
 * You can use an if statement inside another if statement:
 */

// Nested if statements can make your code more complex.
if (country == "USA") {
  if (age >= 16) {
    text = "You can drive!";
  }
}

console.log(text);

// A better solution is to use the logical AND operator:
if (country == "USA" && age >= 16) {
  text = "You can drive!";
}

console.log(text);