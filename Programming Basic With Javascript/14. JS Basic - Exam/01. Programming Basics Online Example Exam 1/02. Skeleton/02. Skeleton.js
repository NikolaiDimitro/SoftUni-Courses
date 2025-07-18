function skeleton(minutesOfTheController, secondsOfTheController, lengthOfTheChuteInMeters, secondsToRun100Meters) {

    let totalTimeForController = minutesOfTheController * 60 + secondsOfTheController;
    let decrement = lengthOfTheChuteInMeters / 120;
    let totalDecrement = decrement * 2.5;
    let totalTimeForCompetitor = (lengthOfTheChuteInMeters / 100) * secondsToRun100Meters - totalDecrement;

    if (totalTimeForController >= totalTimeForCompetitor) {

        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(totalTimeForCompetitor).toFixed(3)}.`);

    } else {

        console.log(`No, Marin failed! He was ${(totalTimeForCompetitor - totalTimeForController).toFixed(3)} second slower.`);

    }
}
skeleton(2, 12, 1200, 10);
skeleton(1, 20, 1546, 12);