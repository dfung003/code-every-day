// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
