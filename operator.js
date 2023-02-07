const child = [
    { name: "aska", age: 10, gender: "l", birth_month: "january" },
    { name: "reni", age: 11, gender: "p", birth_month: "march" },
    { name: "reno", age: 16, gender: "l", birth_month: "march" },
    { name: "niko", age: 17, gender: "l", birth_month: "october" },
    { name: "rika", age: 12, gender: "p", birth_month: "january" },
    { name: "intan", age: 19, gender: "p", birth_month: "march" },
    { name: "kojo", age: 15, gender: "l", birth_month: "march" },
    { name: "sani", age: 17, gender: "p", birth_month: "october" },
    ];


// diberikan data sebagai berikut
// Tentukan anak yang umurya genap
// const evenAge = child.map((c) => {
// if(c.age%2 === 0){
//     return c.name
//     // return `Anak dengan umur genap adalah ${c.name}`
// }
// })
const evenAge = child.filter((c) => c.age%2 === 0)
// Tentukan anak yang lahir pada bulan maret dan umurnya lebih dari atau sama dengan 15
const aboveAge = child.filter((c) => c.age >= 15 && c.birth_month === 'march')
// Tentukan anak yang umurnya ganjil dan jenis kelamin nya perempuan
// const oddAgeGirl = child.map((c)=>{
//     if(c.age%2 !== 0 && c.gender === 'p') {
//         return c
//     }
// })
const oddAgeGirl = child.filter((c)=> c.age%2 === 1 && c.gender === 'p')
// tentukan anak yang nama nya berawalan huruf "R"
const childName = child.filter((c)=> c.name[0] === 'r')

// task 2

const myCars = ['BMW', 'Toyota', 'VW', 'Porche'];

let myCarsInGarage = [];

function insertMyCarIntoGarage (arr) {
    // return myCarsInGarage.concat(arr).sort()

    // myCarsInGarage.push(...arr)
    // return myCarsInGarage.sort()

	const sortingCar = arr.sort()
    myCarsInGarage.push(...sortingCar)
    return myCarsInGarage
}

// Insert the cars by alphabetically

console.log(insertMyCarIntoGarage(myCars))