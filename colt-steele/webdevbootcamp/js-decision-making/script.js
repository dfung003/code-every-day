// JavaScript Decision Making \\

// Boolean Logic, Making decisions with JavaScript
// Comparisons
/*
> greater than
< less than
>= greater than or equal to
<= less than or equal to
== equality
!= not equal
=== strict equality
!== strict non-equality
*/

// Examples
/*
10 > 1 true
0.2 > 0.3 false
-10 < 0 true
50.5 < 5 false
0.5 <= 0.5 true
99 >= 4 true
99 >= 99 true
'a' < 'b' true
'A' > 'a' false

Notice these all return a Boolean!

Though it's uncommon, you can compare strings. Just be careful, things get dicey when dealing with case, special characters, and accents!
*/

// Equality: Triple Vs. Double Equals
// == (double equals)
/*
- Checks for equality of value, but not equality of type
- It coerces both values to the same type and then compares them
- This can lead to some unexpected results
*/

// == WEIRDNESS
/*
5 == 5; // true
'b' == 'c'; // false
7 == '7'; // true
0 == ''; // true
true == false; // false
0 == false; // true
null == undefined; // true

// Triple Equals - checks for equality of value and type
/*
5 === 5; // true
1 === 2; // false
2 === '2'; // false
false === 0; // false

Same applies for != and !==
10 != '10' // false
10 !== '10'; // true
*/

/*
Question 1:
What does the following code evaluate to?

3 <= 2
false

Question 2:
What does the following evaluate to?

9 == '9'
true

Question 3:
What does the following code evaluate to?

-5 >= -6
true
*/

// Console, Alert & Prompt
/*
console.log()
- prints arguments to the console
- we need this if we're going to start working with files!
*/

let userInput = prompt("please enter a number")

parseInt(userInput) + 1
// turns string into number

parseInt("101")

// Running Code From a File
/* 
- make a new folder
- make a script.js file
console.log("Hello from our first js file!"
- save file
- make index.html with script element at the bottom of the body
<script src="script.js"></script>
*/

// If Statement
// Only runs code if given condition is true
let rating = 3;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
}

if (1 + 1 === 2) {
    console.log("MATH STILL WORKS!")
}

console.log("BEFORE CONDITIONAL");
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
    console.log(random);
}
console.log("AFTER CONDITIONAL")

if (random >= 0.5) {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!")
    console.log(random);
}