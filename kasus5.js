const hadir = [true, false, true, true, false, true];

let kehadiran = 0;
let tidakHadir= 0;
for (i = 0; i < hadir.length; i++){
    if (hadir[i] == true){
        console.log(`Siswa ke-${i + 1} hadir`);
        kehadiran ++
    } else {
        console.log(`Siswa ke-${i + 1} tidak hadir`);
        tidakHadir++
    }
} 

console.log(`Total siswa hadir = ${kehadiran}`)
console.log(`Total siswa tidak hadir = ${tidakHadir}`)
