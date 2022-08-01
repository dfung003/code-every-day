// Intro to Linear Search \\
// How do we search?

// Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

// JavaScript has search!

/*
There are many different search methods on arrays in JavaScript:
- indexOf
- includes
- find
- findIndex
*/

// Linear Search

// Goes through an array to check if the value is in the array or not

// Linear Search Pseudocode
/*
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1
*/

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 56);

// Linear Search Big O

// O(1) Best, O(n) Worst, O(n) Average