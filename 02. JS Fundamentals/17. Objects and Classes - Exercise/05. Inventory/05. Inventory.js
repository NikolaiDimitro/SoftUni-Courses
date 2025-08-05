function inventory(arr) {

    let obj = {};
    let newArray = [];

    for (let hero of arr) {

        hero = hero.split('/');

        obj.name = hero[0].trim();
        obj.age = Number(hero[1]);
        obj.item = hero[2].trim();

        newArray.push(obj);
        obj = {};

    }

    newArray = newArray.sort((a, b) => a.age - b.age);

    for (let obj of newArray) {

        console.log(`Hero: ${obj.name}`);
        console.log(`level => ${obj.age}`);
        console.log(`items => ${obj.item}`);

    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);