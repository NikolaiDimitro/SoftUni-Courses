function tennisRanklost(arr) {

    let total = 0;
    total += Number(arr[1]);
    let count = 0;

    for (let i = 2; i <= arr.length; i++) {

        if (arr[i] === 'W') {

            total += 2000;
            count += 1;

        } else if (arr[i] === 'F') {

            total += 1200;

        } else if (arr[i] === 'SF') {

            total += 720;

        }
    }

    console.log(`Final points: ${total}`);
    console.log(`Average points: ${Math.floor((total - arr[1]) / arr[0])}`);
    console.log(`${(count / arr[0] * 100).toFixed(2)}%`);

}
tennisRanklost(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklost(["4", "750", "SF", "W", "SF", "W"]);