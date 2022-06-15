// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10^-4  are acceptable.

// Pseudo Code

// Positive and negative integers, and zero. First you have to find the number of integers you have in the array.

// Look through arr, 3 variables, a variable for an array of positive integers, a variable for an array of negative integers, a variable for zeros

// Divide each array lengths by the original array length

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    // Write your code here
    let positiveArr = []
    let negativeArr = []
    let zeroArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveArr.push(arr[i])
        } else if (arr[i] < 0) {
            negativeArr.push(arr[i])
        } else {
            zeroArr.push(arr[i])
        }
    }
    let positiveLength = positiveArr.length / arr.length
    let negativeLength = negativeArr.length / arr.length
    let zeroLength = zeroArr.length / arr.length
    // console.log(positiveArr, negativeArr, zeroArr)
    console.log(positiveLength.toFixed(6) + "\n" +
        negativeLength.toFixed(6) + "\n" +
        zeroLength.toFixed(6))
}