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

// Array Methods
/*
Push - add to end
Pop - remove from end
Shift - remove from end
Unshift - add to start
*/

// MORE METHODS
/*
concat - merge arrays
includes - look for a value
indexOf - just like string.indexOf
join - creates a string from an array
reverse - reverses an array
slice - copies a portion on an array
splice - removes/replaces elements
sort - sorts an array
*/

let movieLine = ['tom', 'nancy']

movieLine[2] = 'pablo'

movieLine.push('oliver')
// ['tom', 'nancy', 'pablo', 'oliver']

movieLine.shift()
// ['nancy', 'pablo', 'oliver']

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
planets.shift('The Moon');
planets.push('Saturn');
planets.unshift('Mercury');

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

let cats = ['blue', 'kitty']

let dogs = ['rusty', 'wyatt']

cats.concat(dogs)
// ['blue', 'kitty', 'rusty', 'wyatt']

// Includes Method
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate

cats.includes('blue');
// true
cats.includes('Blue');
// false