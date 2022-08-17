// Intro to Sorting Algorithms \\

// What is sorting?

// Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

// Examples
/*
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue
*/

// Why do we need to learn this?
/*
- Sorting is an incredibly common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages
*/

// JavaScript has a sort method... \\
/*
- Yes it does!
- ... but it doesn't always work the way you expect
*/

["Steele", "Colt", "Data Structures", "Algorithms"].sort();
// ["Algorithms", "Colt", "Data Structures", "Steele"]

[6, 4, 15, 10].sort();
// [10, 15, 4, 6]

// Telling JavaScript how to sort
/*
- The built-in sort method accepts an optional comparator function
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - If it returns a negative number, a should come before b
    - If it returns a positive number, a should come after b
    - If it returns 0, a and b are the same as far as the sort is concerned
*/

// Examples
function numberCompare(num1, num2) {
    return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
// ["Colt", "Steele", "Algorithms", "Data Structures"]

// Bubble Sort \\
/*
- A sorting algorithm where the largest values bubble up to the top!
*/
// [5, 3, 4, 1, 2]
// [3, 5, 4, 1, 2]
// [3, 4, 5, 1, 2]
// [3, 4, 1, 5, 2]
// [3, 4, 1, 2, 5]

// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order)
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Bubble Sort Pseudocode
/*
- Start loopog from with a variable called i the end of the array towards the beginning
- Start an inner loop with a variable called j from the beginning until i - 1
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37, 45, 29, 8]);

//[37, 45, 29, 8]
//[37, 45, 29, 8]
//[37, 29, 45, 8]
//[37, 29, 8, 45]
// etc. solution goes on for too long

function bubbleSort2(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort2([37, 45, 29, 8])
// 37 45
// 45 29
// 45 8
// 37 29
// 37 8
// 29 8
// [8, 29, 37, 45]

// optimized with noSwaps when no reason to swap and already sorted
function bubbleSort3(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // SWAP
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort3([8, 1, 2, 3, 4, 5, 6, 7])

// Big 0 of Bubble Sort is O(n^2)
// Big 0 of Bubble Sort when nearly sorted is O(n)