// Comparison Sorts \\
// Average Time Complexity
/*
- Bubble Sort O(n^2)
- Insertion Sort O(n^2)
- Selection Sort O(n^2)
- Quick Sort O(n log (n))
- Merge Sort O(n log (n))
Can we do better?
Yes, but not by making comparisons
*/

// Radix Sort: Introduction \\
/*
- Radix sort is a special sorting algorithm that works on lists of numbers
- It never makes comparisons between elements!
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- More digits means a bigger number!
*/

// How does it work?
[1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29]


// 0 1 2 3 4 5 6 7 8 9 Buckets
/*
- Go through entire list of our numbers in the array and start by looking at the first digit of the number (6 for the first element on right side, then 4, then 6, 3, etc.)
- Group them into buckets based on that number
- 2: 902; 3: 593; 4: 4; 6: 86, 4386, 3556, 1556; 7: 9637, 8157, 7; 8: 408; 9: 29;
- Sorted into [902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
- Group them based on the second digit to their right
- 0: 408, 7, 4, 902; 2: 29; 3: 9637; 5: 8157, 3556, 1556; 8: 86, 4386; 9: 593;
- Sorted into [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]
- Group them based on the third digit
- 0: 4, 7, 29, 86; 1: 8157; 3: 4386; 4: 408; 5: 1556, 3556, 593;
- Do the same for the last digit
- Sorted into [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
- allows us to sort numbers very fast without comparisons
*/

// Radix Sort Helpers
/*
- In order to implement radix sort, it's helpful to build a few helper functions first:
- getDigit(num, place): returns the digit in num at the given place value
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
*/

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(num) - returns the number of digits in num
// digitCount(1); // 1
// digitCount(25); // 2
// digitCount(314); // 3

/* 
- mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
mostDigits([1234, 56, 7]); // 4
mostDigits([1, 1, 11111, 1]); // 5
mostDigits([12, 34, 56, 78]); // 2
*/

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

mostDigits([23, 567, 89, 12234324, 90]) // 8 because largest number has 8 digits

// Radix Sort Pseudocode
/*
- Define a function that accepts lists of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - Place each number in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return list at the end!
*/