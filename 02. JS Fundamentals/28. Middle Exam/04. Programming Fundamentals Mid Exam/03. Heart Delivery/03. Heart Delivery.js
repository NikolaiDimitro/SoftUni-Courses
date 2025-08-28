function heartDelivery(arr) {

    let neighborhood = arr.shift().split('@').map(x => Number(x));
    let index = 0;
    let currentIndex = 0;

    while (arr[index] !== 'Love!') {

        let current = arr[index];
        let [command, jumpIndex] = current.split(' ');

        jumpIndex = Number(jumpIndex);
        currentIndex += jumpIndex;

        if (currentIndex > neighborhood.length - 1) {

            currentIndex = 0;

        }

        let currentHouse = neighborhood[currentIndex];

        if (currentHouse === 0) {

            console.log(`Place ${currentIndex} already had Valentine's day.`);
            index++;
            continue;

        }

        currentHouse -= 2;

        if (currentHouse < 0) {

            currentHouse = 0;

        }

        neighborhood.splice(currentIndex, 1, currentHouse);

        if (currentHouse === 0) {

            console.log(`Place ${currentIndex} has Valentine's day.`);

        }

        index++;

    }

    console.log(`Cupid's last position was ${currentIndex}.`);
    let count = 0;

    for (let i = 0; i < neighborhood.length; i++) {

        let current = neighborhood[i];

        if (current !== 0) {

            count++;

        }
    }

    if (count === 0) {

        console.log(`Mission was successful.`);

    } else {

        console.log(`Cupid has failed ${count} places.`);

    }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);