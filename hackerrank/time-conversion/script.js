// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.


// Pseudo Code

// Midnight is -12 hours

// Any other AM times are the same value

// PM add 12 hours

function timeConversion(s) {
    // Write your code here
    const arr = s.split('')
    arr.pop()
    arr.pop()
    const hourArr = [arr[0], arr[1]]
    let hour = parseInt(hourArr.join(''))
    let result = arr.join('')
    if (s.includes('PM')) {
        if (hour !== 12) {
            hour += 12
        }
        let hourStr = hour.toString().split('')
        console.log(hourStr)
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
        console.log(result)

    } else if (s.includes('AM') && hour === 12) {
        hour -= 12
        let hourStr = hour.toString().split('')
        hourStr.push('0')
        console.log(hourStr)
        arr.shift()
        arr.shift()
        arr.unshift(hourStr[1])
        arr.unshift(hourStr[0])
        result = arr.join('')
        console.log(result)

    }
    return result
}