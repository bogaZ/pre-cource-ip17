var anak =
    [
        { name: "aska", age: 10, gender: "l", birth_month: "january" },
        { name: "reni", age: 11, gender: "p", birth_month: "march" },
        { name: "reno", age: 16, gender: "l", birth_month: "march" },
        { name: "niko", age: 17, gender: "l", birth_month: "october" },
        { name: "rika", age: 12, gender: "p", birth_month: "january" },
        { name: "intan", age: 19, gender: "p", birth_month: "march" },
        { name: "kojo", age: 15, gender: "l", birth_month: "march" },
        { name: "sani", age: 17, gender: "p", birth_month: "october" },
    ]


// diberikan data sebagai berikut :
// Tentukan anak yang umurya genap
// Tentukan anak yang lahir pada bulan maret dan umurnya lebih dari atau sama dengan 15
// Tentukan anak yang umurnya ganjil dan jenis kelamin nya perempuan
// tentukan anak yang nama nya berawalan huruf "R"

console.log("Anak yang umurnya Genap : ")
anak.map(element => {
    if (element.age % 2 == 0) {
        console.log(element.name + " umur : " + element.age);
    }
})
console.log("\n")

console.log("Lahir bulan maret dan umur lebih dari / sama dengan 15 : ");
anak.map((anaknya) => {
    if (anaknya.birth_month === "march" && anaknya.age >= 15) {
        console.log(anaknya.name + " lahir bulan : " + anaknya.birth_month + " umur : " + anaknya.age);
    }
})
console.log("\n")

console.log("Tentukan anak yang umurnya ganjil dan jenis kelamin nya perempuan")
anak.map((anaknya) => {
    if (anaknya.age % 2 !== 0 && anaknya.gender === "p") {
        console.log(anaknya.name + " umur : " + anaknya.age + " gender : " + anaknya.gender);
    }
})
console.log("\n")

console.log('tentukan anak yang nama nya berawalan huruf "R"')
anak.map((element) => {
    if (element.name[0].toLocaleUpperCase() === 'R') {
        console.log(element.name);
    }
})

anak.map((element) => {
    if (element.name[0].toLocaleUpperCase() === 'R') {
        console.log(element.name);
    }
})


