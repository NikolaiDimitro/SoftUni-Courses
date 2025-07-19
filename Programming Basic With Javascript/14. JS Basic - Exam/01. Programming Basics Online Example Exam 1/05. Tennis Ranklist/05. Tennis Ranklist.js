function tennisRanklist(arr) {

    let total = 0;
    let count = 0;

    for (let i = 2; i < arr.length; i++) {

        if (arr[i] === 'W') {

            total += 2000;
            count++;

        } else if (arr[i] === 'F') {

            total += 1200;

        } else {

            total += 720;

        }
    }

    console.log(`Final points: ${total + Number(arr[1])}`);
    console.log(`Average points: ${Math.floor(total / Number(arr[0]))}`);
    console.log(`${(count / Number(arr[0]) * 100).toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanklist((["4", "750", "SF", "W", "SF", "W"]));
tennisRanklist(["7", "1200", "SF", "F", "W", "F", "W", "SF", "W"]);