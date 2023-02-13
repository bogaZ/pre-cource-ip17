

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

// console.log(timeConversion(input))

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

let string = 'roqfqeylxuyxjfyqterizzkhgvngapvudnztsxeprfp'

// function untuk mengubah string menjadi matrix
function encryption(s) {
    // Write your code here
    // mengubah string menjadi array of string
    let newString = s.split(' ').join('')
    let arrString = newString.split('')

    // menghitung panjang array string 
    let arrLength = arrString.length

    // menghitung akar dari panjang array string
    let akar = Math.sqrt(arrLength)
    let rowcol = []
    let matrix = []
    let arrayMatrix = []

    // menyeleksi jika hasilnya bukan bilangan bulat maka ambil 2 akar bilangan terdekat
    if (!Number.isInteger(akar)) {
        let akar1 = Math.floor(akar)
        let akar2 = akar1 + 1
        rowcol.push(akar1)
        rowcol.push(akar2)
        // jika bilangan bulat maka push bilanhan tersebut 2x ke array rowcol
    } else {
        rowcol.push(akar)
        rowcol.push(akar)
    }

    // nilai terdekat
    let max = Math.max(...rowcol)
    let last = 1

    // membuat matrix sesuai dengan jumlah row dan column
    for (let index = 0; index < arrString.length; index++) {
        // console.log(arrString[index])
        if (last !== max) {
            matrix.push(arrString[index])
            last++
        }
        else {
            matrix.push(arrString[index])
            arrayMatrix.push(matrix)
            matrix = []
            last = 1
        }
    }
    // melakukan push sisa matrix ke array matrix
    if (matrix.length !== 0) {
        arrayMatrix.push(matrix)
    }

    console.log(arrayMatrix)
    console.log("\n")

    let newMatrix = []
    if ((rowcol[0] * rowcol[1]) < arrLength || rowcol[0] === rowcol[1]) {
        console.log("langsung balik")
        // jalankan method pembalik
        reservearr(arrayMatrix)
    } else {
        // disisni lanjutanya 
        arrayMatrix.forEach(element => {
            if (element.length === max) {
                newMatrix.push(element[max - 1])
                element.pop()
            }
        });
        // jalankan method pembalik
        reservearr(arrayMatrix)
        arrayMatrix.push(newMatrix)

    }
    let output = []
    console.log(arrayMatrix)
    console.log("\n")
    console.log("row and column : " + rowcol)
    arrayMatrix.forEach(element => {
        output.push(element.join(''))
    });

    return output.join(' ')
}

// funcktion untuk membalik string matrix secara menyilang
function reservearr(arr) {
    let x = Math.floor(arr.length / 2)
    console.log('balik data secara menyilang sebanyak : ')
    console.log(x)

    for (let index1 = 0; index1 < x; index1++) {
        // bawah dengan kanan
        for (let index = index1; index < arr[index1].length - 1 - index1; index++) {
            console.log('proses bawah kanan')
            // bawah kiri
            let tmp = arr[arr.length - 1 - index1][index]

            //bawah kiri tuker atas kanan
            arr[arr.length - 1 - index1][index] = arr[index][arr[index].length - 1 - index1]

            // atas kanan tuker bawah kiri
            arr[index][arr[index].length - 1 - index1] = tmp
        }
        // atas dengan kiri
        for (let index = 1 + index1; index < arr[index1].length - 1 - index1; index++) {
            console.log('proses kiri atas')
            let tmp = arr[index][index1]
            arr[index][index1] = arr[index1][index]
            arr[index1][index] = tmp
        }
    }
}

console.log(encryption(string))
console.log('Belajar github ok')
