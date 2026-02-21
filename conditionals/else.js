/**
 * The else Statement
 * 
 * Use the else statement to specify a block of code to be executed if a condition is false.
 */

// If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
let hour = 20;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);

/**
 * The else if Statement
 * 
 * Use the else if statement to specify a new condition if the first is false.
 */

let time = 18;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);