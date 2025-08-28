function muOnline(rooms) {
    
    rooms = rooms.split('|');
    let hp = 100;
    let bitcoins = 0;
    let isDead = false;

    for (let i = 0; i < rooms.length; i++) {

        let [command, count] = rooms[i].split(' ');
        count = Number(count);

        if (command === 'potion') {

            let healed = Math.min(100 - hp, count);
            hp += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${hp} hp.`);

        } else if (command === 'chest') {

            bitcoins += count;
            console.log(`You found ${count} bitcoins.`);

        } else {

            hp -= count;

            if (hp > 0) {

                console.log(`You slayed ${command}.`);

            } else {

                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;

            }
        }
    }

    if (!isDead) {

        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${hp}`);

    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");