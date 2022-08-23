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