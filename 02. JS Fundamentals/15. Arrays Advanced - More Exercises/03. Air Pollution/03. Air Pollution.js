function airPoppulation(mapOfSofia, differentPower) {

    mapOfSofia = mapOfSofia.map(row => row.split(' ').map(Number));

    for (let command of differentPower) {

        let [type, value] = command.split(' ');
        value = Number(value);

        if (type === 'breeze') {

            for (let col = 0; col < 5; col++) {

                mapOfSofia[value][col] = Math.max(0, mapOfSofia[value][col] - 15);

            }

        } else if (type === 'gale') {

            for (let row = 0; row < 5; row++) {

                mapOfSofia[row][value] = Math.max(0, mapOfSofia[row][value] - 20);

            }

        } else if (type === 'smog') {

            for (let row = 0; row < 5; row++) {

                for (let col = 0; col < 5; col++) {

                    mapOfSofia[row][col] += value;

                }
            }
        }
    }

    let polluted = [];

    for (let row = 0; row < 5; row++) {

        for (let col = 0; col < 5; col++) {

            if (mapOfSofia[row][col] >= 50) {

                polluted.push(`[${row}-${col}]`);

            }
        }
    }

    if (polluted.length === 0) {

        console.log("No polluted areas");

    } else {

        console.log(`Polluted areas: ${polluted.join(', ')}`);

    }
}
airPoppulation(['5 7 3 28 32', '41 12 49 30 33', '3 16 20 42 12', '2 20 10 39 14', '7 34 4 27 24'], ['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
airPoppulation(['5 7 2 14 4', '21 14 2 5 3', '3 16 7 42 12', '2 20 8 39 14', '7 34 1 10 24'], ['breeze 1', 'gale 2', 'smog 35']);