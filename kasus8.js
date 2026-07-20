const menu = [10000, 25000, 18000, 12000, 50000];
for (i = 0; i < menu.length; i++){
    if (menu[i] > 20000){
        console.log(`Menu ${i + 1} adalah Menu Premium`)
    } else {
        console.log(`Menu ${i + 1} adalah Menu Biasa`)
    }
}