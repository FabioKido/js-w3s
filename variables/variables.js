/**
 * Variables are labels (rótulos) for data values.
 * Variables are containers for storing data.
 * Variables are identified with unique names called identifiers.
 * Creating a variable in JavaScript is called declaring a variable.
 * It's a good programming practice to declare all variables at the beginning of a script.
 * 
 * JavaScript variables can be declared in 4 ways:
  * 'Let, Const'
  * 'Var e Automatically' (Não recomendado).
 */

let x = 5;
const y = 6;
var z = x + y; // 11

// A convention among professional programmers is to start a name with underscore for "private" variables.
let _amount = 5000 // R$ 5,00 ou 5000/100

// After the declaration, the variable has no value (technically it is undefined).
let carName;

// To assign (atribuir) a value to the variable, use the equal sign.
carName = 'Volvo';

// Always use const if the value should not be changed.
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

// Undeclared variables are automatically (não recomendado) declared when first used.
a = 5;
b = 6;
c = a + b;

/**
 * Always declare variables
 * Always use const if the value should not be changed
 * Always use const if the type should not be changed (Arrays and Objects)
 * Only use let if you cannot use const
 * Never use var if you can use let or const.
 */

// You can declare many variables in one statement.
let person = "John Doe", bookName = "America", price = 200;

// A declaration can span multiple lines.
let firstName = "John Doe",
carBrand = "Volks",
amount = 200;

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
let f = "5" + 2 + 3; // "523" string
let h = 2 + 3 + "5"; // "55" string
