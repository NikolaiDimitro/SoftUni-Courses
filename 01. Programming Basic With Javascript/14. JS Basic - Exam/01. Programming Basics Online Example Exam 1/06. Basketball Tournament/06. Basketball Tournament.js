function basketballTournament(arr) {

    let index = 2;
    let nameOfTournament = arr[0];
    let countOfGame = Number(arr[1]);
    let countOfAllResultsForOneTournament = 0;
    let resultFirstTeam = 0;
    let resultOfSecondTeam = 0;
    let count = 0;
    let countWin = 0;
    let countLost = 0;
    let totalGame = 0;
    totalGame += countOfGame;

    while (arr[index] !== 'End of tournaments') {

        countOfAllResultsForOneTournament = (countOfGame * 2) + 1;

        let current = Number(arr[index]);
        resultFirstTeam += current;

        index++;

        current = Number(arr[index]);
        resultOfSecondTeam += current;
        count++;

        if (resultFirstTeam > resultOfSecondTeam) {

            console.log(`Game ${count} of tournament ${nameOfTournament}: win with ${resultFirstTeam - resultOfSecondTeam} points.`);

            resultFirstTeam = 0;
            resultOfSecondTeam = 0;
            countWin++;

        } else {

            console.log(`Game ${count} of tournament ${nameOfTournament}: lost with ${resultOfSecondTeam - resultFirstTeam} points.`);

            resultFirstTeam = 0;
            resultOfSecondTeam = 0;
            countLost++;

        }

        if (index === countOfAllResultsForOneTournament) {

            index++;
            nameOfTournament = arr[index];
            index++;
            countOfGame = Number(arr[index]);
            countOfAllResultsForOneTournament = (countOfGame * 2) + 1;
            count = 0;
            totalGame += countOfGame;

        }

        index++;

        if (arr[index] === 'End of tournaments') {

            console.log(`${((countWin / (totalGame)) * 100).toFixed(2)}% matches win`);
            console.log(`${((countLost / totalGame) * 100).toFixed(2)}% matches lost`);
            break;

        }
    }
}
basketballTournament(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTournament(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);