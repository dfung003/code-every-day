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