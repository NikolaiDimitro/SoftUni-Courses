function footballResult(resultFromFirstMatch, resultFromSecondMatch, resultFromThirdMatch) {

    let firstMatchHost = resultFromFirstMatch.substring(0, 1);
    let firstMatchGuest = resultFromFirstMatch.substring(2, 3);

    let secondMatchHost = resultFromSecondMatch.substring(0, 1);
    let secondMatchGuest = resultFromSecondMatch.substring(2, 3);

    let thirdMatchHost = resultFromThirdMatch.substring(0, 1);
    let thirdMatchGuest = resultFromThirdMatch.substring(2, 3);

    let countWin = 0;
    let countDraw = 0;
    let countLose = 0;

    if (firstMatchHost > firstMatchGuest) {

        countWin++;

    } else if (firstMatchGuest > firstMatchHost) {

        countLose++;

    } else {

        countDraw++;

    }

    if (secondMatchHost > secondMatchGuest) {

        countWin++

    } else if (secondMatchGuest > secondMatchHost) {

        countLose++

    } else {

        countDraw++;

    }

    if (thirdMatchHost > thirdMatchGuest) {

        countWin++;

    } else if (thirdMatchGuest > thirdMatchHost) {

        countLose++;

    } else {

        countDraw++;

    }

    console.log(`Team won ${countWin} games.`);
    console.log(`Team lost ${countLose} games.`);
    console.log(`Drawn games: ${countDraw}`);

}
footballResult('3:1', '0:2', '0:0');
footballResult('4:2', '0:3', '1:0');
footballResult('0:2', '0:1', '3:3');