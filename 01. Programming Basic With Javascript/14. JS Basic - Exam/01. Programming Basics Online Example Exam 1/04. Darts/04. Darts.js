function darts(arr) {

    let nameOfTheContestant = arr[0];
    let totalPoints = 301;
    let index = 1;
    let countSuccessfulShots = 0;
    let countFailedShots = 0;

    while (arr[index] !== 'Retire') {

        let field = arr[index];

        index++;

        let points = Number(arr[index]);

        if (field === 'Single') {

            if (points > totalPoints) {

                countFailedShots++;

            } else {

                totalPoints -= points;
                countSuccessfulShots++;

            }

        } else if (field === 'Double') {

            if (points * 2 > totalPoints) {

                countFailedShots++;

            } else {

                totalPoints -= points * 2;
                countSuccessfulShots++;

            }

        } else {

            if (points * 3 > totalPoints) {

                countFailedShots++;

            } else {

                totalPoints -= points * 3;
                countSuccessfulShots++;

            }
        }

        if (totalPoints === 0) {

            console.log(`${nameOfTheContestant} won the leg with ${countSuccessfulShots} shots.`);
            break;

        }

        index++;

        if (arr[index] === 'Retire') {

            console.log(`${nameOfTheContestant} retired after ${countFailedShots} unsuccessful shots.`);

        }
    }
}
darts((["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"]));
darts((["Stephen Bunting", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "7", "Single", "12", "Double", "1", "Single", "1"]));
darts((["Rob Cross", "Triple", "20", "Triple", "20", "Triple", "20", "Triple", "20", "Double", "20", "Triple", "20", "Double", "5", "Triple", "10", "Double", "6", "Retire"]));