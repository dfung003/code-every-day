// Insertion Sort \\


// Builds up the sort by gradually creating a larger left half which is always sorted
// [5, 3, 4, 1, 2]
// [3, 5, 4, 1, 2] insert 3 before 5
// [3, 4, 5, 1, 2] insert 4 before 5 
// [1, 2, 3, 4, 5] insert 2 before 3
// insert one item at a time in the correct place

// Insertion Sort Pseudocode
/*
- Start picking the second element in the array
- Now compare the second element with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- Repeat until the array is sorted
*/

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal;
        console.log(arr)
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4])

// [1, 2, 4, 9, 76]
// [1, 2, 9, 76, 4]
// [1, 2, 9, 76, 4]
// [1, 2, 9, 76, 4]
// [1, 2, 4, 9, 76]
// [1, 2, 4, 9, 76]

// Big O

// Worst case is O(n^2), but if data is almost sorted it is O(n) such as [1, 2, 3, 4, -1]