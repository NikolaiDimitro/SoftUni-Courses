function dungeonestDark(str) {

    let healt = 100;
    let coins = 0;
    let rooms = str.split('|');
    let count = 0;
    let difference = 0;

    for (let i = 0; i < rooms.length; i++) {

        count++;
        let curremt = rooms[i];
        let itemOrMonster = curremt.split(' ');

        if (itemOrMonster[0] === 'potion') {

            difference = 100 - healt;

            if (Number(itemOrMonster[1]) > difference) {

                console.log(`You healed for ${difference} hp.`);
                healt += difference;

            } else {

                console.log(`You healed for ${Number(itemOrMonster[1])} hp.`);
                healt += Number(itemOrMonster[1]);

            }

            console.log(`Current health: ${healt} hp.`);

        } else if (itemOrMonster[0] === 'chest') {

            coins += Number(itemOrMonster[1]);
            console.log(`You found ${Number(itemOrMonster[1])} coins.`);

        } else {

            healt -= Number(itemOrMonster[1]);

            if (healt > 0) {

                console.log(`You slayed ${itemOrMonster[0]}.`);

            } else {

                console.log(`You died! Killed by ${itemOrMonster[0]}.`);
                console.log(`Best room: ${count}`);

                return;

            }
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${healt}`);

}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");