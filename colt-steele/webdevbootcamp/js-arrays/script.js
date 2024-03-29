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

cats.indexOf('blue');
// 0

// Reverse Method
/* Reverse method is destructive,
it changes the original array
*/

dogs.reverse();
// ['wyatt', 'rusty']

// Slice method
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let colors3 = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

colors3.slice(3);
// ['green', 'blue', 'indigo', 'violet']

// Method to get a new array with slice method
let warmColors = colors3.slice(0, 3)

// ['red', 'orange', 'yellow']

// Splice Method
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// Sort Method
// The sort() method sorts the elements of an array in place and returns the sorted array
// does not sort in numerical order

// Filter Method
// creates a new array with all alements that pass the test implemented by the provided function

// Reference Types and Equality Testing
[1] === [1]
// false

// comparing references in memory, not what is inside

let refNums = [1, 2, 3]
let refCopy = [1, 2, 3]

// refNums === refCopy
// true

// Arrays and Const
// The values can change as long as the reference remains the same
// const cares about the variable not being reassigned

const PI = 3.14159;

// PI += 1 => TypeError

const numsArray = [1, 2, 3]

nums.push(4)

// [1, 2, 3, 4] // 4 is added to end of array, cannot change PI variable
// PI remains constant regardless if you try to change the value