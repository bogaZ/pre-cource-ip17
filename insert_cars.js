const myCars = ['BMW', 'Toyota', 'VW', 'Porche']

let myCarsInGarage = []

function insertMyCarIntoGarage() {
    myCars.sort().forEach(element => {
        myCarsInGarage.push(element)
    });

    // myCarsInGarage = myCars.sort()

    console.log(myCarsInGarage)
}

insertMyCarIntoGarage()

