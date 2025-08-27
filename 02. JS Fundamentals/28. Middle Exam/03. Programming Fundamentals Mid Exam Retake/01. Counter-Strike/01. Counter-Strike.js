function counterStrike(arr) {

    let energy = Number(arr.shift());
    let index = 0;
    let count = 0;

    while (arr[index] !== 'End of battle') {

        let current = Number(arr[index]);

        if (current <= energy) {

            count++;
            energy -= current;

        } else {

            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            return;

        }

        if (count % 3 === 0) {

            energy += count;

        }

        index++;

        if (index === arr.length) {

            break;

        }
    }

    console.log(`Won battles: ${count}. Energy left: ${energy}`);

}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);