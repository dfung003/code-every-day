// Big O of Objects \\

/*

- Insertion: O(1); JS is able to add something into an object in constant time
- Removal: O(1); can update something in constant time
- Searching: O(n); checking to see if a given piece of info is in a value somewhere
    - check to see if a value is true for example
- Access: O(1); can retrieve something in constant time

*/

// Big O of Object Methods \\

/*

- Object.keys: O(n); as number of items in object grows, you would have to visit every single item once and add to array
- Object.values: O(n);
- Object.entries: O(n); has to compile key and value
- hasOwnProperty: O(1); able to access info in constant time, so we can check if keys exist

*/

// Big O of Arrays \\

/*

- Insertion: It depends; adding into the end of an array is constant, inserting into beginning of array is O(n) because it shifts each index to the next index (reindexing which the previous index 0 would shift to index 1 and so forth)
- Removal: It depends; removing from the end of an array is constant, removing from the beginning will shift indexes left (index 1 will become index 0, and so forth)
- Searching: O(n);
- Access: O(1); when we have an array with three items, and want access to index 2

*/

// Example 1

let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

/*
When to Use Arrays

- When you need order
- When you need fast access/insertion and removal

*/

// Big O of Array Methods \\

/*

- push: O(1);
- pop: O(1);
- shift: O(n);
- unshift: O(n);
- concat: O(n); merge two or more arrays
- slice: O(n);
- splice: O(n);
- sort: O(n * log n);
- forEach/map/filter/reduce/etc.: O(n);

*/