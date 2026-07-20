const nilai = [80, 95, 70, 88, 100, 65];
nilaiTertinggi = nilai[0]
nilaiTerendah = nilai[0]
for (i = 0; i < nilai.length; i++){
    if (nilai[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai[i]
    } else if (nilai[i] < nilaiTerendah) {
        nilaiTerendah = nilai[i]
    }
}

console.log(`Nilai terendah = ${nilaiTerendah}`)
console.log(`Nilai tertinggi = ${nilaiTertinggi}`)