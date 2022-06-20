// Algorithms and Problem Solving Patterns \\

// What is an algorithm?

/*

- A process or set of steps to accomplish a certain task
- set of mathematical steps for example
- ex: calculate the first 100 prime numbers
- it's the foundation for being a successful problem solving and developer

*/

// How do you improve?

/*

1. Devise a plan for solving problems
2. Master common problem solving patterns

*/

// Problem solving steps

/*

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/simplify
- Look back and refactor

*/


// Understand The Problem \\

/*

1. Can I restate the problem in my own words?
    - restate, change words without copying interviewer's word for word
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
    - what should the outputs look like?
    - what should be returned from my function?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
5. How should I label the important pieces of data that are a part of the problem?

*/

// Example 1
// Write a function which takes two numbers and returns their sum.

/*

1. Restate problem
    - implement addition of two numbers
2. What are the inputs
    - Ints? Floats (a decimal integer with either decimal points or fraction expressed)?
    - what about string for large numbers?
3. What are the outputs that should come from the solution to the problem?
    - Int? Float? String?
4. Can outputs be determined from inputs
    - do we have enough info? what happens when someone inputs one number? do we return undefined or null?
5. How to label important pieces of data in the problem?
    - Num1 and num2 as arguments; sum is our result that we return

*/


// Explore Concrete Examples \\

/*

- coming up with examples can help you understand the problem better
- examples also provide sanity checks that your eventual solution works how it should (like user stories, unit tests)

*/

// Explore examples steps

/*

- Start with simple examples
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

*/

// Example 2
// Write a function which takes in a string and returns counts of each character in the string.

/*

- restate problem and do Understand the Problem steps
1. Start with simple examples
    - charCount("aaaa"); returns {a:4}, does it return an object, not an array?
    - charCount("hello"); returns {h:1, e:1, l:2, o:1}
    - do we want to return letters that aren't there? In "hello," what about a, b, c, etc.
2. Progress to more complex examples
    - input: "my phone number is 182763"
    - do we account for spaces, symbols ($_@), numbers
    - do we store in uppercase and lowercase, or do we ignore casing
3. Explore examples with empty inputs
    - charCount(""); return empty {}, null, undefined, error?
4. Explore examples with invalid inputs
    - what if someone inputs numbers, or objects, or null
*/


// Break It Down \\

/*

- Explicitly write out the steps you need to take
- basic components of your solution
- this forces you to think about the code you'll write before you write it, and it helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

*/

// Previous Example
// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters in the string
}

function charCount(str) {
    // make object to return at end
    // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it to object and set the value to 1
    // if character is something else (space, period, etc.) don't do anything
    // return object at end
}