function minNumbers(arr) {

    let minNumber = Number.MAX_SAFE_INTEGER;
    let index = 0;

    while (arr[index] !== 'Stop') {

        let numb = Number(arr[index])

        if (numb < minNumber) {

            minNumber = numb;

        }

        index++;

    }

    console.log(minNumber);

}
minNumbers(["100", "99", "80", "70", "Stop"]);
minNumbers(["-10", "20", "-30", "Stop"]);
minNumbers(["45", "-20", "7", "99", "Stop"]);
minNumbers(["999", "Stop"]);
minNumbers(["-1", "-2", "Stop"]);