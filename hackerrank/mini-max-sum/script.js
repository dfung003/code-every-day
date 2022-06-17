// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

arr = [1, 3, 5, 7, 9]

function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((a, b) => a + b);
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    // console.log(maxValue);
    // console.log(minValue);
    console.log((sum - maxValue) + ' ' + (sum - minValue));
}