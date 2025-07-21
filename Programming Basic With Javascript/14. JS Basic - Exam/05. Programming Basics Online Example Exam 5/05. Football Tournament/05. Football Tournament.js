function footballTournament(arr) {

    let nameOfClub = arr[0];
    let countOfGames = Number(arr[1]);
    let index = 2;
    let totalPoints = 0;
    let countWins = 0;
    let countDraws = 0;
    let countLoses = 0;

    if (countOfGames === 0) {

        console.log(`${nameOfClub} hasn't played any games during this season.`);
        return;

    }

    while (index < arr.length) {

        let current = arr[index];

        if (current === 'W') {

            totalPoints += 3;
            countWins++;

        } else if (current === 'D') {

            totalPoints += 1;
            countDraws++;

        } else {

            countLoses++;

        }

        index++;

    }

    console.log(`${nameOfClub} has won ${totalPoints} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${countWins}`);
    console.log(`## D: ${countDraws}`);
    console.log(`## L: ${countLoses}`);
    console.log(`Win rate: ${((countWins / countOfGames) * 100).toFixed(2)}%`);

}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
footballTournament(["Chelsea", "0"]);