Given an array of integers and a positive integer k, determine the number of(i, j) pairs where(i < j) and ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                result++
            }
        }
    }
    return result;
}