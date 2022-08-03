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

// Intro to Binary Search \\

/*
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!
*/

// Divide and Conquer

// Let's search for 15:

[1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19]

// Is 15 greater or less than 11 which is roughly the middle of the array?
// Greater, so eliminate 1 to 11 in the array and work with 12 to 19 with 17 as the median
// Is 15 greater or less than 17?
// Less than, so eliminate 17 to 19
// Work with 12 to 16 with 15 as median, 15 is equal to 15
// It took 3 guesses which is better than using linear search

// Binary Search Pseudocode

/*
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer
    - Create a pointer in the middle
    - If you find the value you want, return the index
    - If the value is too small, move the left pointer up
    - If the value is too large, move the right pointer down
- If you never find the value, return -1
*/

function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    console.log(start, middle, end);
    // return arr[middle] === elem ? middle: -1;
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)
// [2, 5, 6, 9, 13, 15, 28, 30]
//  s        m              e

// [2, 5, 6, 9, 13, 15, 28, 30]
//              s   m        e

// Big O of binary search

// O(log n) Worst and average case, O(1) Best case

// Naive String Search

/*
- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involves checking pairs of characters individually
*/

// Long String: wowomgzomg              Short string: omg

// Psuedocode

/*
- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If you complete the inner loop and find a match, increment the count of matches
- Return the count
*/

function naiveSearch(long, short) {
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // console.log(long[i], short[j])
            if (short[j] !== long[i + j]) {
                // console.log("BREAK!")
                break;
            }
            if (j === short.length - 1) {
                // console.log("FOUND ONE!")
                count++;
            }

        }
    }
    return count;
}

naiveSearch("lorie loled", "lol")

// i: "l" j: "l"