function lunchBreak(nameOfSeries, episodeDuration, breakDuration) {

    let lunchTime = breakDuration / 8;
    let timeForRest = breakDuration / 4;
    let timeForWatching = breakDuration - lunchTime - timeForRest;

    if (timeForWatching >= episodeDuration) {

        console.log(`You have enough time to watch ${nameOfSeries} and left with ${Math.ceil(timeForWatching - episodeDuration)} minutes free time.`);

    } else {

        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${Math.ceil(episodeDuration - timeForWatching)} more minutes.`);

    }
}
lunchBreak("Game of Thrones", 60, 96);
lunchBreak("Teen Wolf", 48, 60);