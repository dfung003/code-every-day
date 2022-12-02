// JS Arrays \\

// Arrays
// Ordered collections of values
/*
- List of comments on IG post
- Collections of levels in a game
- Songs in a playlist
*/

// Creating Arrays

// To make an empty array
let students = [];

// An array of strings
let colors = ['red', 'orange', 'yellow'];

// An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array
let stuff = [true, 68, 'cat', null];

// Coding Exercise: Arrays
// Define lottoNumbers below:
const lottoNumbers = [5, 2, 28, 14, 7, 22]

// Arrays are Indexed
// Each element has a corresponding index (counting starts at 0)
let colors2 = ['red', 'orange', 'yellow', 'green'];

colors.length //4

colors2[0] //'red'
colors2[1] //'orange'
colors2[2] //'yellow'
colors2[3] //'green'
colors2[4] //'undefined'

let beatles = ['paul', 'john', 'george']

beatles[3] = 'ringo';

// Can modify elements in array and add to array

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';