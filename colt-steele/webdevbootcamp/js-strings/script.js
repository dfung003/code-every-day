// JavaScript Strings aand More \\

// Strings
// Strings are another primitive type in JavaScript. They represent text, and must be wrapped in quotes.

let username = "danny"; // Double quotes work

let msg = "Please do not feed the chimps!";

let animal = 'Dumbo Octopus'; // So do single quotes

// let bad = "this is wrong'; (This does not work)

// It's fine to use either single or double quotes, just be consistent in your codebase

let favAnimal = 'Dumbo Octopus';

// "I told her 'go away' " is valid

// Please define the following string variables (you can use either let or const):

// bestColor should be set to the string purple (the best color on planet earth, as we all know);

// quote should be set to the string You had me at "hello" - be careful about quotation marks, we want double quotes inside the string.

let bestColor = "purple";

let quote = 'You had me at "hello" ';


// Strings are indexed
// C H I C K E N
// 0 1 2 3 4 5 6
// Each character has a corresponding index (a positional number)

// let animal = "Dumbo Octopus"
animal[0] // D
animal[1] // u
animal[6] // O
animal[99] // undefined
animal.length // 13
"lol".length // 3
"lol"[0] // "l"

"lol" + "lol" // "lollol"; called concatenation

let firstName = "River";
let lastName = "Phoenix";

firstName = "river"; // reassign variable with value of "river"

let fullName = firstName + " " + lastName
fullName // "river Phoenix"

// String Methods
/*
- Methods are built-in actions we can perform with individual strings
- They help us do things like:
    - Searching within a string
    - Replacing part of a string
    - Changing the casing of a string
*/

// Casing
let msg1 = 'I am king';
let yellMsg = msg1.toUpperCase(); // 'I AM KING'

let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase(); // 'leave me alone!'

//the value in angry is unchanged
angry; // 'LeAvE mE aLoNe!'

// Trim
let greeting = '    leave me alone plz    ';

greeting.trim() // 'leave me alone plz'

let userInput = "   hello my name is tim"

userInput.trim() // "hello my name is tim"


// String Methods With Arguments

// thing.method(arg)
/*
- Some methods accept arguments that modify their behavior. Think of them as inputs that we can pass in. We pass these arguments inside of the parentheses.
*/

// indexOf
let tvShow = 'catdog'

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)

// slice
let str = 'supercalifragilisticexpialidocious'

str.slice(0, 5) // 'super'

str.slice(5); // 'califragilisticexpialidocious'

// replace
let annoyingLaugh = 'teehee so funny! teehee!';

annoyingLaugh.replace('teehee', 'haha') // 'haha so funny! teehee!'
// Notice that it only replaces the first instance

// String Template Literals

let product = 'Artichoke';

let price = 3.99;

price = 2.25;

let qty = 5;

/*
- Temperate literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
- We use back-ticks not single quotes
- `I am a template literal`
*/

console.log(`You bought ${qty} ${product}. Total is: ${price * qty}`)

// Undefined and Null
/*
- Null
    - "Intentional absence of any value"
    - Must be assigned
- Undefined
    - Variables that do not have an assigned value are undefined
*/

// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing

// A user logs in...
loggedInUser = "Alan Rickman";

// Random Numbers & The Math Object
/* Math Object
- Contains properties and methods for mathematical constants and functions
*/

Math.PI // 3.141592653

// Rounding a number:
Math.round(4.9) //5

// Absolute value:
Math.abs(-456) //456

// Raises 2 to the 5th power:
Math.pow(2, 5) //32

// Removes decimal:
Math.floor(3.9999) //3

// Random Numbers
// Math.random() gives us a random decimal between 0 and 1 (non-inclusive)
Math.random();
// 0.14502435424

Math.floor(Math.random() * 10) + 1 // Random number from 1 to 10

// Math Object
// Contains properties and methods for mathematical constants and functions
Math.pow(2, 3)
// Same as 2**3

// String Template Literal Exercise

// I've provided you with two variables, die1 and die2 which represent six-sided dice.  Each variable holds a randomly generated integer from 1 to 6. // Please create a new variable called roll, which will be a string that displays each die as well as their sum.  Follow this pattern:
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

const roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}.`