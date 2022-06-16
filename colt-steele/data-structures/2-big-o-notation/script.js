// Big O Notation \\

/* 

- Big O Notation allows us to talk formally about how the runtime of an algorithm grows as the inputs grow
- relationship between the input size and then the time relative to that input
- when we talk about Big O, we are talking about the worst case scenario (the upper bound for runtime)

*/

// Example 1

function countUpAndDown(n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {            // O(n) as n grows, this loop grows
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {       // 0(n) as n grows, this loop grows
        console.log(j);
    }
    console.log("Back down. Bye!");         // Even though it is 2n, we simplify it to O(n) for the big picture
}

// Example 2 Nested Loop

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {            // O(n)
        for (let j = 0; j < n; j++) {        // O(n) operation inside an O(n) operation
            console.log(i, j);
        }
    }
}                                           // O(n^2)

// Simplifying Big O Notation \\

/*
Rules for simplifying Big O

- Constants don't matter                    O(2n) -> 0(n), O(500) -> O(1), O(13n^2) -> O(n^2)
- Smaller terms don't matter                O(n + 10) -> O(n), O(n^2 + 5n + 8) -> O(n^2)
- Arithmetic operations are constant        
- Variable assignment is constant
- Accessing elements in an array (by index) or object (by key) is constant
- In a loop, the complexity is the length of the loop times the complexity
of whatever happens inside of the loop

*/

// Example 3

function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {         // prints numbers up to n
        console.log(i);                                 // minimum prints up to 5
    }                                                   // O(n), as n grows the loop grows
}

// Example 4

function logAtLeast5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {         // doesn't matter if n grows, it will only loop at most 5 times
        console.log(i);                                 // if n is 1000, runs 5 times. if n is 2, runs 2 times.
    }                                                   // O(1)
}

/*

O(1) flat line
O(n) straight line 1:1 ratio
O(n^2) line gets steeper

*/

// Space Complexity \\

// - Space complexity: the amount of memory that's taken up 

// Rules of Thumb

/*

- Most primitives (booleans, numbers, undefined, null) are constant space, meaning input size doesn't matter
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

*/

// Example 1
// function takes array and sums all the elements in the array
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// O(1) space, total and i are variables, always the same no matter the input

// Example 2
// function takes an array and returns a new array that doubles each item in the array
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);                        // array is getting longer proportionate to the input
    }
    return newArr;
}

// O(n) space because of new array getting larger as input size gets larger

// Logarithms \\

/*
- Logarithm is the inverse of exponentiation
- Ex: log based 2 of (value) = exponent -> 2^exponent = value
- omit the base number in the subscript
- The logarithm of a number roughly measures the number of times you can divide that number
by 2 before you get a value that's less than or equal to one
*/

// Logarithm Complexity

/*

- certain searching algorithms have logarithmic time complexity
- efficient sorting algorithms involve logarithms
- recursion sometimes involves logarithmic space complexity

*/


