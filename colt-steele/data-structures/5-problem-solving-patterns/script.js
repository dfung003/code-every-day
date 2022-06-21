// Problem Solving Patterns \\

// Some Patterns...

/*

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

*/

// Frequency Counters

/*

- This pattern uses objects or sets to collect values/frequencies of values
- multiple inputs and compare them
- anagrams, frequencies of something occuring
- this can often avoid the need for nested loops or O(n^2) operations with arrays/strings

*/

// Example 1

// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

/*

same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

*/

// Refactored Solution O(n)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}                                      // each object counts the frequency of individual values in the arrays
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1  // iterates through first array and counts how many times the element shows up
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1  // iterates through second array and counts how many times the element shows up
    }
    for (let key in frequencyCounter1) {                             // loop over the first object, if we have 2 showing up twice, 4 must show up twice in the
        if (!(key ** 2 in frequencyCounter2)) {                      // second array
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {// do the values in the second array match the values in the first array
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}

same([1, 2, 3, 2], [9, 1, 4, 4])

// Anagrams

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

/*

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

// {a: 3, n: 1, g: 1, r: 1, m: 1}
// {a: 0, n: 0, g: 0, r: 0, m: 0}
validAnagram('anagram', 'nagaram')