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
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5!!!")
    console.log(random);
}
console.log("AFTER CONDITIONAL")

// Our First Conditional Exercise

// Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

// Write your code between the two comments in index.js

// You will automatically have access to a variable called num.  Please do not try and define num or change num in any way! I will be setting the value of num when I test your code, so that I can test different outcomes

// If num is an even number, print out "even".  Don't do anything if num is an odd number.

function isEven(num) {

    if (num % 2 === 0) {
        console.log('even')
    }

}

// Else If
// If not the first thing, maybe this other thing??
// We can add multiple else ifs!
let ratingB = 2;

if (ratingB === 3) {
    console.log("YOU ARE A SUPERSTAR!");
}
else if (ratingB === 2) {
    console.log("MEETS EXPECTATIONS");
}
else if (ratingB === 1) {
    console.log("NEEDS IMPROVEMENT");
}

const dayOfWeek = 'Saturday';

if (dayOfWeek === 'Monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'Saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'Friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}

const age = 8;

if (age < 5) {
    console.log("You are a child. You get in for free!")
} else if (age < 10) {
    console.log("You are a child. You pay $10.")
} else if (age < 65) {
    console.log("You are an adult. You pay $20.")
} else {
    console.log("You are a senior. You pay $10.")
}

// ELSE
// If nothing else was true, do this...

/*
getColor Conditional Exercise
Let's get some practice with conditional statements!  In order to make your code repeatable and testable, I'm asking you to write your code inside a pre-defined function (something we have not yet covered in the course).   

Write your code between the two comments in index.js

You will automatically have access to a variable called phrase.  Please do not try and define phrase or change phrase in any way! I will be setting the value of phrase when I test your code.

Your job is to print out a color based upon the following rules:

if phrase is 'stop', you should print out 'red'
if phrase is 'slow', you should print out 'yellow'
if phrase is 'go', you should print out 'green'
if phrase is anything else, you should print out 'purple'
*/

function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === "stop") {
        console.log("red")
    } else if (phrase === "slow") {
        console.log("yellow")
    } else if (phrase === "go") {
        console.log("green")
    } else {
        console.log("purple")
    }
}

// Nesting
// We can nest conditionals inside conditionals

let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot include spaces");
    }
    else {
        console.log("Valid password!!")
    }
}
else {
    console.log("Password too short!");
}

const password2 = prompt("please enter a new password");

// Password must be 6+ characters

if (password2.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")
    if (password2.indexOf(' ') === -1) {
        console.log("Good job! No space!")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters.")
}

// Password cannot include space


// Nested Conditionals Practice

// Time for something a little bit different. I've given you a nested conditional that uses a variable called num.  I would like for you to change the value of num to another number, so that "YOU GOT ME!" is printed out. Don't change anything other than the value of num!  Leave the conditional alone!

// Change the value of num, so that "YOU GOT ME!" prints out
const num2 = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE

if (num2 <= 100) {
    if (num2 >= 50) {
        console.log("HEY!");
    }
} else {
    if (num2 < 103) {
        if (num2 % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

// Truthy and Falsy Values
/*
- All JS values have an inherent truthyness or falsyness about them
- Falsy values:
    - false
    - 0
    - "" (empty string)
    - null
    - undefined
    - NaN
- Everything else is truthy!
*/

const userInput1 = prompt("Enter something");

// if (userInput1) {
//     console.log("TRUTHY!")
// } else {
//     console.log("FALSY!")
// }

if (0) {
    console.log("TRUTHY")
} else {
    console.log("FALSY")
}

if (' ') {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// AND
// Both sides must be true, for the entire thing to be true

// 1 <= 4 && 'a' === 'a'; true

// 9 > 10 && 9 >= 9; false

// 'abc'.length === 3 && 1+1 === 4; false

// true && true
// true

// true && false
// false

// false && false
// false

// false && true
// false

const password3 = prompt("Enter your password");
if (password3.length >= 6 && password3.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// Logical AND Mystery Exercise

// I've provided you with a conditional statement that uses a variable called mystery  Please change the value of mystery so that the conditional is true and "YOU GOT IT" is printed to the console.  Do not change anything other than the value of mystery on line 1! 

const mystery = 'Peeee7';

if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}

// Logical Operators
// Allow us to combine expressions &&, ||, !

// OR
// If one side is true, the entire thing is true

// only one side needs to be true!

1 !== 1 || 10 === 10 // true

10 / 2 === 5 || null // true

0 || undefined // false

// OR example
// 10-65 $20
// 65+ free

const ageOR = 100;
if ((ageOR >= && ageOR < 5) || ageOR >= 65) {
    console.log("FREE");
} else if (ageOR >= 5 && ageOR < 10) {
    console.log("$10")
} else if (ageOR >= 10 && ageOR < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// NOT
// !expression returns true if expression is false

// !null // true
// ! (0 === 0) // false
// !(3 <= 4) // false

const notAge = 45;
if (!(notAge >= 0 && notAge < 5 || notAge >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}

// SWITCH
// The switch statement is another control-flow statement that can replace multiple if statements.

// syntax unwieldy and hard to remember, but it's good to know about

const day = 2;
switch (day) {
    case 1:
        console.log("MONDAY!")
        break;
    case 2:
        console.log("TUESDAY!");
        break;
    case 3:
        console.log("WEDNESDAY");
    case 4:
        console.log("THURSDAY");
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND!")
        break;
    default:
        console.log("INVALID NUMBER!")
}