// Recursion \\

// The idea is basically taking one problem and doint it over and over on a smaller piece or on a changing piece until you hit some end point, which we call the base case

// Recursion is a process (a function in our case) that calls itself

// It's used all the time

/*
- JSON.parse/JSON.stringify often written recursively
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration
*/

// Functions

// In almost all program languages, there is a built in data structure that manages what happens when functions are invoked
// Named the call stack
// It's a stack data structure
// Any time a function is invoked it is placed(pushed) on top of the call stack
// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) the top item from the stack

// Why do I care?

// You're used to functions being pushed on the call stack and popped off when they are done

// When we write recursive functions, we keep pushing new functions onto the call stack!

// How recursive functions work

// Invoke the same function with a different input until you reach your base case

// Base Case

// The condition when the recursion ends
// This is the most important concept to understand

// Two essential parts of a recursive function
// Base Case
// Different Input

// Our first recursive function \\

function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// Print 3
// countDown(2)
// print 2
// countDown(1)
// print 1
// countDown(0) Base Case
// print "All done!" because return
countDown(5);

// Our second recursive function \\

function sumRange(num) {
    if (num === 1) return 1;             // Base case
    return num + sumRange(num - 1);     // Recursive call
}

// sumRange(4) => 10
// sumRange(3) => 6
// return 3 + sumRange(2)
// return 2 + sumRange(1)
// return 1


// Factorials \\

function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}

factorial(4) // 24

// Factorials Recursively \\

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

factorial(5);


// Where things go wrong

/*
- No base case causing infinite loop
- Forgetting to return or returning the wrong thing!
- Stack overflow! Recursion is not stopping
*/

// Helper Method Recursion \\
function outer(input) {

    var outerScopedVariable = []

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;
}

function collectOddValues(arr) {

    let result = []

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

// Pure Recursion \\

function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

// Pure Recursion Tips

// For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
// Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
// To make copies of objects use Object.assign, or the spread operator