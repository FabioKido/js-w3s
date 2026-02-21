/**
 * The Conditional (Ternary) Operator
 */

// If the value of age is < 18, set the value of text to "Minor", otherwise to "Adult":
let age = 18;
let text = (age < 18) ? "Minor" : "Adult";
console.log(text);

// Add discount if is a member:
let isMember = true;
let discount = isMember ? 0.2 : 0;
console.log(discount);

/**
 * Description
 * 
 * The conditional operator is a shorthand for writing conditional if...else statements.
 * It is called a ternary operator because it takes three operands.
 */

// The conditional (ternary) operator is the only JavaScript operator that takes three operands.
(condition) ? expression1 : expression2