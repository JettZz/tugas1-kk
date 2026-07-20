const skor = [100, 450, 800, 150, 900];

for (i = 0; i < skor.length; i++) {
    if (skor[i] >= 800){
        console.log(`Player ${i + 1} adalah Rank Mythic`)
    } else if (skor[i] >= 500){
        console.log(`Player ${i + 1} adalah Rank Legend`)
    } else if (skor[i] >= 300) {
        console.log(`Player ${i + 1} adalah Rank EPic`)
    } else {
       console.log(`Player ${i + 1} adalah Rank Warrior`)
    }
}

