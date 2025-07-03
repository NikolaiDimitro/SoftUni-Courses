function maxNumber(arr) {

    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;

    while (arr[index] !== 'Stop') {

        let numb = Number(arr[index]);
        if (numb > maxNumber) {

            maxNumber = numb;

        }

        index++;

    }

    console.log(maxNumber);

}
maxNumber(["100", "99", "80", "70", "Stop"]);
maxNumber(["-10", "20", "-30", "Stop"]);
maxNumber(["45", "-20", "7", "99", "Stop"]);
maxNumber(["999", "Stop"]);
maxNumber((["-1", "-2", "Stop"]));