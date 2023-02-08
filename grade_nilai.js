// 1. Kapan dan mengapa menggunakan switch case atau if else, silahkan jelaskan alasannya?
// switch case digunakan ketika hanya terdapat satu kondisi dimana apakah variabel yang dicek itu sama dengan nilai tertentu
// If Else digunakan untuk menyeleksi lebih dari satu kondisi yang bervariasi


// 2. Terdapat array [0, 5 ,2, 7, 4, 9, 6, 11, 8, 13, 10, 15, 12, 17, 14, 21, 16, 23, 18, 25, 20], cari nilai yang habis dibagi 3, lalu inputkan ke dalam array baru, kemudian tampilkan dalam bentuk array yang baru tersebut. (Bebas menggunakan bahasa apapun)

let arrays = [0, 5, 2, 7, 4, 9, 6, 11, 8, 13, 10, 15, 12, 17, 14, 21, 16, 23, 18, 25, 20]

let newArray = []

arrays.forEach(element => {
    if (element > 0 && element % 3 === 0) {
        newArray.push(element)
    }
});
console.log(newArray)
console.log("\n")

let mataKuliah = [
    { nama: "mata kuliah 1", nilai: 70, grade: undefined },
    { nama: "mata kuliah 2", nilai: 80, grade: undefined },
    { nama: "mata kuliah 3", nilai: 75, grade: undefined },
    { nama: "mata kuliah 4", nilai: 85, grade: undefined },
    { nama: "mata kuliah 5", nilai: 90, grade: undefined },
    { nama: "mata kuliah 6", nilai: 95, grade: undefined },
    { nama: "mata kuliah 7", nilai: 60, grade: undefined },
    { nama: "mata kuliah 8", nilai: 70, grade: undefined }
]

let total = 0

mataKuliah.forEach(element => {
    if (element.nilai <= 50) {
        element.grade = "D"
    }
    else if (element.nilai <= 60) {
        element.grade = "C"
    }
    else if (element.nilai <= 70) {
        element.grade = "BC"
    }
    else if (element.nilai <= 80) {
        element.grade = "B"
    }
    else if (element.nilai <= 85) {
        element.grade = "AB"

    } else if (element.nilai <= 100) {
        element.grade = "A"
    }
    else {
        element.grade = "Nilai tidak terdefinisi"
    }

    total += element.nilai

});

let average = total / mataKuliah.length

console.log(mataKuliah)
console.log("rata-rata : " + average)

