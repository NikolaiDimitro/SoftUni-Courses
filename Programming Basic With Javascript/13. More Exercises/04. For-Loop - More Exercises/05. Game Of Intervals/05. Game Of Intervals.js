function gameOfIntervals(arr) {

    let totalPoints = 0;
    let countInRange0to9 = 0;
    let countInRange10to19 = 0;
    let countInRange20to29 = 0;
    let countInRange30to39 = 0;
    let countInRange40to50 = 0;
    let invalidNumbers = 0;

    for (let i = 1; i <= arr.length; i++) {

        let current = Number(arr[i]);

        if (current >= 0 && current <= 9) {

            totalPoints += current * 0.2;
            countInRange0to9++;

        } else if (current >= 10 && current <= 19) {

            totalPoints += current * 0.3;
            countInRange10to19++;

        } else if (current >= 20 && current <= 29) {

            totalPoints += current * 0.4;
            countInRange20to29++;

        } else if (current >= 30 && current <= 39) {

            totalPoints += 50;
            countInRange30to39++;

        } else if (current >= 40 && current <= 50) {

            totalPoints += 100;
            countInRange40to50++;

        } else if (current < 0 || current > 50) {

            totalPoints /= 2;
            invalidNumbers++;

        }
    }

    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${((countInRange0to9 / Number(arr[0]) * 100).toFixed(2))}%`);
    console.log(`From 10 to 19: ${((countInRange10to19 / Number(arr[0]) * 100).toFixed(2))}%`);
    console.log(`From 20 to 29: ${((countInRange20to29 / Number(arr[0]) * 100).toFixed(2))}%`);
    console.log(`From 30 to 39: ${((countInRange30to39 / Number(arr[0]) * 100).toFixed(2))}%`);
    console.log(`From 40 to 50: ${((countInRange40to50 / Number(arr[0]) * 100).toFixed(2))}%`);
    console.log(`Invalid numbers: ${((invalidNumbers / Number(arr[0]) * 100).toFixed(2))}%`);

}
gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);