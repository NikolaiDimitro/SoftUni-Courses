function theLift(arr) {

    let countOfPeople = Number(arr.shift());
    let wagons = arr.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {

        let freeSpots = 4 - wagons[i];

        if (countOfPeople >= freeSpots) {

            wagons[i] += freeSpots;
            countOfPeople -= freeSpots;

        } else {

            wagons[i] += countOfPeople;
            countOfPeople = 0;
            break;

        }
    }

    if (countOfPeople === 0 && wagons.some(w => w < 4)) {

        console.log("The lift has empty spots!");

    } else if (countOfPeople > 0 && wagons.every(w => w === 4)) {

        console.log(`There isn't enough space! ${countOfPeople} people in a queue!`);

    }

    console.log(wagons.join(' '));
    
}
theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);