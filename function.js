
// deret bilangan prima
function prima(bilangan) {
    let arrayPrima = []
    for (let bil = 1; bil <= bilangan; bil++) {
        let faktor_pembagi = 0
        for (let index = 1; index <= bil; index++) {
            if (bil % index === 0) {
                faktor_pembagi += 1
            }
        }
        if (faktor_pembagi === 2) {
            arrayPrima.push(bil)
        }
    }

    return arrayPrima
}



// deret bilangan fibonanci
function fibonanci(bilangan) {
    let arrayFibonanci = []
    for (let index = 0; index < bilangan; index++) {
        if (index < 2) {
            arrayFibonanci.push(1)
        } else {
            arrayFibonanci.push(arrayFibonanci[index - 2] + arrayFibonanci[index - 1])
        }
    }
    return arrayFibonanci
}

console.log(fibonanci(9))
//console.log(prima(9))