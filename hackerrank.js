

function case1(grade) {
    // input
    // output
    let newGrade = []

    grade.forEach(element => {

        let after = element

        while (after % 5 != 0) {
            after += 1
        }

        if (after < 40) {
            newGrade.push(element)
        } else {
            let selisih = after - element
            if (selisih < 3) {
                newGrade.push(after)
            } else {
                newGrade.push(element)
            }
        }
    });

}


let ar = [1, 2, 3, 4, 10, 11]

let output = 0

ar.forEach(element => {
    output += element
});



let a = [1, 2, 3]
let b = [3, 2, 1]
let score = [0, 0]

for (let index = 0; index < 3; index++) {
    if (a[index] > b[index]) {
        score[0] += 1
    } else if (a[index] < b[index]) {
        score[1] += 1
    }
}


// let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]

function diagonalDifference(arr) {
    // Write your code here
    let first = 0
    let second = 0
    for (let index = 0; index < arr.length; index++) {
        first += arr[index][index]
    }
    let index2 = arr.length - 1
    for (let index = 0; index < arr.length; index++) {
        second += arr[index][index2]
        index2--
    }

    return Math.abs(first - second)
}

function plusMinus(arr) {
    // Write your code here
    let arrayLength = arr.length
    let zero = 0
    let positive = 0
    let negative = 0
    let output = []
    arr.forEach(element => {
        if (element < 0) {
            negative += 1
        } else if (element > 0) {
            positive += 1
        } else if (element === 0) {
            zero += 1
        }
    });

    output.push((positive / arrayLength).toFixed(6))
    output.push((negative / arrayLength).toFixed(6))
    output.push((zero / arrayLength).toFixed(6))

    output.forEach(element => {
        console.log(element)
    });
}

function staircase(n) {
    // Write your code here

    for (let index = 1; index <= n; index++) {
        let string = ''
        for (let index2 = 1; index2 <= n; index2++) {
            if (index2 <= n - index) {
                string += ' '
            } else {
                string += '#'
            }
        }
        console.log(string)
    }

}

const array = [5, 5, 5, 5, 5]

function miniMaxSum(arr) {
    // Write your code here
    let output = []
    for (let index = 0; index < arr.length; index++) {
        let total = 0
        for (let index2 = 0; index2 < arr.length; index2++) {
            if (index !== index2) {
                total += arr[index2]
            }
        }
        output.push(total)
    }

    let min = Math.min(...output)
    let max = Math.max(...output)

    console.log(min + " " + max)
}

// miniMaxSum(array)
let thisCandles = [4, 4, 4, 4]

function birthdayCakeCandles(candles) {
    // Write your code here
    let total = 0
    let max = Math.max(...candles)
    candles.forEach(element => {
        if (element === max) {
            total += 1
        }
    });
    return total
}

// console.log(birthdayCakeCandles(thisCandles))

let input = '12:05:45AM'


function timeConversion(s) {
    // Write your code here
    let check = s.slice(8, 10)
    let after = s.slice(0, 8)
    let dateArr = after.split(':')
    let string = ''
    if (check === "PM") {
        if (parseInt(dateArr[0]) >= 12) {
            string = dateArr[0] + ":" + dateArr[1] + ":" + dateArr[2]
        } else {
            string = parseInt(dateArr[0]) + 12 + ":" + dateArr[1] + ":" + dateArr[2]
        }
    } else {
        if (parseInt(dateArr[0]) < 12) {
            string = dateArr[0] + ":" + dateArr[1] + ":" + dateArr[2]
        } else {
            if (dateArr[0] === 12) {
                string = "0" + (parseInt(dateArr[0]) - 12) + ":" + dateArr[1] + ":" + dateArr[2]
            } else {
                string = (parseInt(dateArr[0]) - 12) + ":" + dateArr[1] + ":" + dateArr[2]

            }
        }
    }

    return string
}

console.log(timeConversion(input))

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let totalCost = 0
    if ((z + bc) < wc) {
        // masalah dengan wc
        totalCost = BigInt((b * bc) + (w * (bc + z)))
    } else if ((z + wc) < bc) {
        // masalah dengan bc
        totalCost = BigInt((w * wc) + (b * (wc + z)))
    } else {
        totalCost = BigInt((b * bc) + (w * wc))
    }

    return totalCost

}

