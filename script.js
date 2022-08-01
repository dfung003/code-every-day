// Numbers

/* 
- JS has one number type
- Positive numbers
- Negative numbers
- Whole numbers
- Decimal numbers
*/

// NaN, Not a Number

// 0/0, 1 + NaN 

// Const & Let

/*
- const works like let but you CANNOT change the value
- let allows you to change the value of the variable, as in reassigning it
*/

const hens = 4;
hens = 20; // ERROR

let roosters = 4;
roosters = 20; // 20

// Before let and const, var was the only way of declaring variables. Now no reason to use it.

// Question 1:
// What is the value of score after the following code runs?

let score = 5;
score + 4;

// Answer: 5

// Question 2:
// What is the value of bankBalance after the following code runs:

let bankBalance = 100;
bankBalance /= 2;
bankBalance += 10;

// Answer: 60

// Question 3:
// What is the value of age after the following code runs?

const age = 64;
age++;

// Answer: 64

// Booleans

// Two options: true or false

let numPuppies = 23; // number
numPuppies = false; // Now a boolean
numPuppies = 100; // Back to number