function renovation(arr) {

    let heightoFWall = Number(arr[0]);
    let widthOfWall = Number(arr[1]);
    let percentsOfWindows = Number(arr[2]);
    let totalSquarMeters = Math.ceil((heightoFWall * widthOfWall * 4) * (1 - (percentsOfWindows / 100)));
    let index = 3;

    while (arr[index] !== 'Tired!') {

        let current = Number(arr[index]);

        totalSquarMeters -= current;
        index++;

        if (totalSquarMeters < 0) {

            console.log(`All walls are painted and you have ${Math.abs(totalSquarMeters)} l paint left!`);
            return;

        } else if (totalSquarMeters === 0) {

            console.log(`All walls are painted! Great job, Pesho!`);
            return;

        }
    }

    console.log(`${totalSquarMeters} quadratic m left.`);

}
renovation((["3", "5", "10", "2", "3", "4", "Tired!"]));
renovation((["2", "3", "25", "6", "7", "8"]));