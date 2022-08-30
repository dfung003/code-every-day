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