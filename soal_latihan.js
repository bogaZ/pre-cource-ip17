const stringValue = "makan"

const checkStringType = (data) => {
    if (typeof data === 'string') {
        return true
    } else {
        throw {
            message: "Data bukan string"
        }
    }
}

try {
    console.log(checkStringType(stringValue))
} catch (error) {
    console.log(error.message)
} finally {
    console.log(stringValue)
}

// lengkapi function diatas ini, tambahkan kondisi error jika type tidak sesuai
// dan console variable stringValue ketika pengecekan sudah selesai
// maaf saya sedang gk bisa open mic
// bisa dikerjakan soal diatas pakai metode try catch yg sudah kita bahas tadi