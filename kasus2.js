const nilai = [90, 75, 60, 45, 88]

let lulus = 0;
let tidaklulus = 0;
for (i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 75) {
    console.log(`Siswa ke ${i + 1} : ${nilai[i]} -> Lulus`);
    lulus++
    } else {
    console.log(`Siswa ke ${i + 1} : ${nilai[i]} -> Tidak Lulus`);
    tidaklulus++
    }
}

console.log(`Jumlah siswa lulus = ${lulus}`)
console.log(`Jumlah siswa tidak lulus = ${tidaklulus}`)
