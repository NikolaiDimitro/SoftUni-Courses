function manOWar(arr) {

    let pirateShip = arr.shift().split('>').map(x => Number(x));
    let warrShip = arr.shift().split('>').map(x => Number(x));
    let hpForOneSection = Number(arr.shift());
    let indexs = 0;

    while (arr[indexs] !== 'Retire') {

        let current = arr[indexs];

        if (current.includes('Fire')) {

            let [command, index, damage] = current.split(' ');

            index = Number(index);
            damage = Number(damage);

            if (index >= 0 && index < warrShip.length) {

                warrShip[index] -= damage;

            } else {

                indexs++;
                continue;

            }

            if (warrShip[index] <= 0) {

                warrShip = [];
                console.log(`You won! The enemy ship has sunken.`);
                return;

            }

        } else if (current.includes('Defend')) {

            let [command, startIndex, endIndex, damage] = current.split(' ');

            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            damage = Number(damage);

            if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {

                for (let i = startIndex; i <= endIndex; i++) {

                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {

                        pirateShip = [];
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;

                    }
                }

            } else {

                indexs++;
                continue;

            }

        } else if (current.includes('Repair')) {

            let [command, index, healt] = current.split(' ');

            index = Number(index);
            healt = Number(healt);

            if (index >= 0 && index < pirateShip.length) {

                if (hpForOneSection - pirateShip[index] > healt) {

                    pirateShip[index] += healt;

                } else {

                    pirateShip[index] = hpForOneSection;

                }

            } else {

                indexs++;
                continue;

            }

        } else if (current.includes('Status')) {

            let smallHealt = hpForOneSection * 0.2;
            let count = 0;

            for (let section of pirateShip) {

                if (section < smallHealt) {

                    count++;

                }
            }

            console.log(`${count} sections need repair.`);

        }

        indexs++;

    }

    let sumOfPiratesShip = 0;
    let sumOfWarrShip = 0;

    for (let section of pirateShip) {

        sumOfPiratesShip += section;

    }

    for (let section of warrShip) {

        sumOfWarrShip += section;

    }

    console.log(`Pirate ship status: ${sumOfPiratesShip}`);
    console.log(`Warship status: ${sumOfWarrShip}`);

}
manOWar(["12>13>11>20>66", "12>22>33>44>55>32>18", "70", "Fire 2 11", "Fire 8 100", "Defend 3 6 11", "Defend 0 3 5", "Repair 1 33", "Status", "Retire"]);
manOWar(["2>3>4>5>2", "6>7>8>9>10>11", "20", "Status", "Fire 2 3", "Defend 0 4 11", "Repair 3 18", "Retire"]);