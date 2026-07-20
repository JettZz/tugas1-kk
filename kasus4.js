const stok = [12, 0, 5, 8, 0, 20];
let habis = 0
let tersedia = 0
for (i = 0; i < stok.length; i++){
    if (stok[i] === 0){
        console.log(`Status Barang-${i + 1} = Barang Habis`);
        habis ++
    } else {
        console.log(`Status Barang-${i + 1} = stok tersedia`);
        tersedia ++
    }
}

console.log(`Barang yang habis: ${habis}`)
console.log(`Barang yang tersedia: ${tersedia}`)