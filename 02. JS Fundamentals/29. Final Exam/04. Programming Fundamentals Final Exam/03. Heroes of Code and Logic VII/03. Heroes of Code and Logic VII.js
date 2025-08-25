function heroesOfCodeAndLogicVII(arr) {

    let countOfHeroes = Number(arr.shift());
    let index = countOfHeroes;
    let obj = {};

    for (let i = 0; i < countOfHeroes; i++) {

        let current = arr[i];
        let [heroName, hp, mp] = current.split(' ');
        obj[heroName] = { hp: Number(hp), mp: Number(mp) };

    }

    while (arr[index] !== 'End') {

        let current = arr[index];

        if (current.includes('CastSpell')) {

            let [command, heroName, mp, spellName] = current.split(' - ');

            if (obj[heroName].mp >= Number(mp)) {

                obj[heroName].mp -= Number(mp);

                console.log(`${heroName} has successfully cast ${spellName} and now has ${obj[heroName].mp} MP!`);

            } else {

                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);

            }

        } else if (current.includes('TakeDamage')) {

            let [command, heroName, damage, attacker] = current.split(' - ');

            if (obj[heroName].hp - Number(damage) > 0) {

                obj[heroName].hp -= Number(damage);
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${obj[heroName].hp} HP left!`);

            } else {

                console.log(`${heroName} has been killed by ${attacker}!`);
                delete obj[heroName];

            }

        } else if (current.includes('Recharge')) {

            let [command, heroName, amount] = current.split(' - ');

            if (obj[heroName].mp + Number(amount) > 200) {

                console.log(`${heroName} recharged for ${200 - obj[heroName].mp} MP!`);
                obj[heroName].mp = 200;

            } else {

                console.log(`${heroName} recharged for ${amount} MP!`);
                obj[heroName].mp += Number(amount)

            }

        } else if (current.includes('Heal')) {

            let [command, heroName, amount] = current.split(' - ');

            if (obj[heroName].hp + Number(amount) > 100) {

                console.log(`${heroName} healed for ${100 - obj[heroName].hp} HP!`);
                obj[heroName].hp = 100;

            } else {

                obj[heroName].hp += Number(amount);
                console.log(`${heroName} healed for ${amount} HP!`);

            }
        }

        index++;

    }

    let entries = Object.entries(obj);

    for (let hero of entries) {

        console.log(hero[0]);
        console.log(`  HP: ${hero[1].hp}`);
        console.log(`  MP: ${hero[1].mp}`);

    }
}
heroesOfCodeAndLogicVII(["2", "Solmyr 85 120", "Kyrre 99 50", "Heal - Solmyr - 10", "Recharge - Solmyr - 50", "TakeDamage - Kyrre - 66 - Orc", "CastSpell - Kyrre - 15 - ViewEarth", "End"]);
heroesOfCodeAndLogicVII(["4", "Adela 90 150", "SirMullich 70 40", "Ivor 1 111", "Tyris 94 61", "Heal - SirMullich - 50", "Recharge - Adela - 100", "CastSpell - Tyris - 1000 - Fireball", "TakeDamage - Tyris - 99 - Fireball", "TakeDamage - Ivor - 3 - Mosquito", "End"]);