const umur = [8, 13, 17, 20, 25, 11];

for (i = 0; i < umur.length; i++){
    if (umur[i] >= 17){
        console.log(`orang ke-${i + 1} boleh masuk`)
    } else {
        console.log(`orang ke-${i + 1} tidak boleh masuk`)
    }
}