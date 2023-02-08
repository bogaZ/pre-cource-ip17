// 1. Kapan dan mengapa menggunakan switch case atau if else, silahkan jelaskan alasannya?
// switch case digunakan ketika hanya terdapat satu kondisi dimana apakah variabel yang dicek itu sama dengan nilai tertentu
// If Else digunakan untuk menyeleksi lebih dari satu kondisi dan variabel yang bervariasi


// 2. Terdapat array [0, 5 ,2, 7, 4, 9, 6, 11, 8, 13, 10, 15, 12, 17, 14, 21, 16, 23, 18, 25, 20], cari nilai yang habis dibagi 3, lalu inputkan ke dalam array baru, kemudian tampilkan dalam bentuk array yang baru tersebut. (Bebas menggunakan bahasa apapun)

// 3. Di Universitas Terbuka Indonesia, terdapat mahasiswa/i. Mereka sudah melakukan ujian akhir semester ganjil. Untuk mata kuliah terdapat 8. Untuk rekap nilai mahasiswa/i, dosen membutuhkan aplikasi untuk menentukan mahasiswa/i nilai rerata dan grade. Silahkan untuk membuat aplikasi input sederhana dengan menggunakan control flow. (Bebas menggunakan bahasa apapun)

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

let grade = ""

switch (true) {
    case average <= 50:
        grade = "D"
        break;

    case average <= 60:
        grade = "C"
        break;
    case average <= 70:
        grade = "BC"
        break;
    case average <= 80:
        grade = "B"
        break;
    case average <= 85:
        grade = "AB"
        break;
    case average <= 100:
        grade = "A"
        break;
    default: "tidak terdefinisi"
        break;
}

console.log(mataKuliah)
console.log("rata-rata : " + average + " Grade : " + grade)
