function treasureHunt(arr) {

    let treasure = arr.shift().split('|');
    let index = 0;

    while (arr[index] !== 'Yohoho!') {

        let current = arr[index];

        if (current.includes('Loot')) {

            let [command, ...items] = current.split(' ');

            for (let item of items) {

                if (!treasure.includes(item)) {

                    treasure.unshift(item);

                }
            }

        } else if (current.includes('Drop')) {

            let [command, index] = current.split(' ');
            index = Number(index);

            if (index >= 0 && index < treasure.length) {

                let item = treasure[index];
                treasure.splice(index, 1);
                treasure.push(item)

            }

        } else if (current.includes('Steal')) {

            let [command, count] = current.split(' ');

            count = Number(count);
            let lostItem = 0;

            if (count < treasure.length) {

                lostItem = treasure.splice(treasure.length - count, count);
                console.log(lostItem.join(', '));

            } else {

                lostItem = treasure.splice(0, count);
                console.log(lostItem.join(', '));

            }
        }

        index++;

    }

    let sum = 0;
    let count = 0;

    if (treasure.length !== 0) {

        for (let items of treasure) {

            count++;
            sum += items.length;

        }

        let averagePrice = sum / count;
        console.log(`Average treasure gain: ${averagePrice.toFixed(2)} pirate credits.`);

    } else {

        console.log('Failed treasure hunt.');

    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup", "Loot Wood Gold Coins", "Loot Silver Pistol", "Drop 3", "Steal 3", "Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);