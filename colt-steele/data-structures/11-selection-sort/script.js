// Selection Sort \\

// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

[5, 3, 4, 1, 2] // compare 5, 3 (min)
[5, 3, 4, 1, 2] // compare 3 (min), 4
[5, 3, 4, 1, 2] // compare 3, 1 (min)
[5, 3, 4, 1, 2] // compare 1 (min), 2
[1, 3, 4, 5, 2] // swap 1 with 5

// Selection Sort Pseudocode
/*
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
- If the "minimum" is not the value (index) you initially began with, swap the two values
- Repeat this with the next element until the array is sorted
*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i; // 0 is i at the first loop
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j) // 0, 1; 0, 2; 0, 3; 0, 4; 1, 2;
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            if (i !== lowest) {          // only swap if i is not the lowest to prevent unnecessary swap
                let temp = arr[i];
                arr[i] = arr[lowest];
                arr[lowest] = temp;
            }
        }
        return arr;
    }

    selectionSort([34, 22, 10, 19, 17])
// i, j, lowest
// 0, 1, 1
// 0, 2, 2
// 0, 3, 2
// 0, 4, 2
// swap index 0 and index 2

// Selection Sort Big O
// Time complexity: O(n^2)
// Use this if you want to minimize the number of swaps
// One swap at the end of each loop