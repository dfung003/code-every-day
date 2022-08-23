// Intermediate Sorting Algorithms \\

// Why learn this?
/*
- The sorting algorithms we've learned so far don't scale well
- Try out bubble sort on an array of 100000 elements, it will take quite some time!
*/

// Faster sorts
/*
- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand
*/

// Merge Sort
/*
- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array
*/

// How does it work?
[8, 3, 5, 4, 7, 6, 1, 2]
// Split into two arrays [8, 3, 5, 4] [7, 6, 1, 2]
// Split again [8, 3] [5, 4] [7, 6] [1, 2]
// Split again [8] [3] [5] [4] [7] [6] [1] [2]
// Merge arrays, sorts to ascending order in each array [3, 8] [4, 5] [6, 7] [1, 2]
// Merge arrays again by comparing first item to first item of the other array [3, 4, 5, 8] [1, 2, 6, 7]
// Final merge [1, 2, 3, 4, 5, 6, 7, 8]

// Merging Arrays Intro \\
/*
- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of
all of the elements in the two input arrays
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
- O(n + m) is iterating over each item in each array once
*/

// Merging Arrays Pseudocode
/*
- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move 	on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move 	
    on to the next value in the second array
    - Once we exhaust one array, push in all remaining values from the other array
*/

// Merging Arrays Implementation
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
merge([1, 10, 50], [2, 14, 99, 100])
// [1, 2, 3, 5, 6, 100]

// mergeSort Pseudocode
/*
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array
*/

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9])

mergeSort([10, 24, 76, 73])
// Check if arr length is less than or equal to 1, no
// Find the mid point
// Call mergeSort on the left side from 0 to mid point
// mergeSort([10, 24])
// Check if arr length is less than or equal to 1, no
// Call mergeSort again on the left side
// mergeSort([10])
// Return arr since arr length is 1 // [10]
// [10, 24] still has value for left variable
// Finds the value for right
// Call mergeSort for the right side
// mergeSort([24])
// Return arr since arr length is 1 // [24]
// merge 10 and 24
// Returns [10, 24]

// mergeSort([76, 73])
// Call mergeSort on left side
// mergeSort([76])
// mergeSort([73])
// merge left and right
// returns [73, 76]

// merge the overall left and right
// [10, 24, 73, 76]

// Big O of mergeSort
// Time O(n log n) Best, Time O(n log n) Average, Space O(n)
// O(n log n) because 2 of what power gives us n
// each time we decompose we have O(n) comparisons everytime we merge
// O(log n) is number of decompositions, as n grows the number of time we split the array is log n
// each time we do split, we have O(n) to perform the merging
// Space complexity as we have a larger array we have to use more space