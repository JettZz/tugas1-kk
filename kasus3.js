const hero = ["Layla", "Ling", "Franco", "Fanny", "Miya", "Eudora"]

console.log(hero)

for (i = 0; i < hero.length; i++){
    if (hero[i].startsWith('F')) {
        console.log(`${hero[i]} -> Hero Assasin/Hero Favorit`)
    } else {
        console.log(`${hero[i]} -> Hero Biasa`)
    }
}
