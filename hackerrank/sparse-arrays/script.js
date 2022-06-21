
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.


function matchingStrings(strings, queries) {
    // Write your code here
    let results = [];

    for (let q of queries) {
        let count = 0;
        for (let s of strings) {
            if (q === s) {
                count++
            }
        }
        results.push(count);
    }
    return results;
}