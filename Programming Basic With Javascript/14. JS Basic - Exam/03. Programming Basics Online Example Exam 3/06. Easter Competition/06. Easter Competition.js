function easterCompetition(arr) {

    let index = 2;
    let currentPoints = 0;
    let nameOfChef = arr[1];
    let nameOfTemporaryWinner = nameOfChef;
    let pointsOfTemporaryWinner = 0;

    while (arr[index] <= arr.length) {

        while (arr[index] !== 'Stop') {

            let current = Number(arr[index]);

            currentPoints += current;
            index++;

            if (arr[index] === 'Stop') {

                console.log(`${nameOfChef} has ${currentPoints} points.`);

                if (pointsOfTemporaryWinner < currentPoints) {

                    pointsOfTemporaryWinner = currentPoints;
                    nameOfTemporaryWinner = nameOfChef;
                    console.log(`${nameOfTemporaryWinner} is the new number 1!`);

                }

                currentPoints = 0;

            }
        }

        index++;
        nameOfChef = arr[index];
        index++;

    }

    console.log(`${nameOfTemporaryWinner} won competition with ${pointsOfTemporaryWinner} points!`);

}
easterCompetition((["3", "Chef Manchev", "10", "10", "10", "10", "Stop", "Natalie", "8", "2", "9", "Stop", "George", "9", "2", "4", "2", "Stop"]));
easterCompetition(["2", "Chef Angelov", "9", "9", "9", "Stop", "Chef Rowe", "10", "10", "10", "10", "Stop"]);