// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.



function processData(input) {
    const inputArr = input.split('\n')
    inputArr.forEach(line => {
        const arr = line.split(';')
        const str = arr[2].split('')
        let res = ''

        if (arr[0] === 'S') {
            str.forEach(char => {
                if (char === char.toUpperCase()) {
                    char = char.toLowerCase()
                    res += ' '
                }
                if (char !== '(' && char !== ')') res += char
            })
            if (arr[1] === 'C') res = res.slice(1)

        } else if (arr[0] === 'C') {
            for (let idx = 0; idx < str.length; idx++) {
                if (str[idx] === ' ') {
                    res += str[idx + 1].toUpperCase()
                    idx++
                } else res += str[idx]
            }
            arr[1] === 'V' ? res = res.charAt(0).toLowerCase() + res.slice(1) : false
            arr[1] === 'C' ? res = res.charAt(0).toUpperCase() + res.slice(1) : false
            if (arr[1] === 'M') {
                res = res.slice(0, -1)
                res += '()'
            }
        } else {
            // console.log('invalid input')
        }
        console.log(res)
    })
}