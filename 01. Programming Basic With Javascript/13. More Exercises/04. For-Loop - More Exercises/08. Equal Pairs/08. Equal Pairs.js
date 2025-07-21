function equalPair(arr) {

    let previousValue = 0;
    let difference = 0;
    let previousNumber = 0;
    let currentNumber = 0;
    let currentValue = 0;
    let maxDifference = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i += 2) {

        previousNumber = Number(arr[i]);
        currentNumber = Number(arr[i + 1]);

        currentValue = previousNumber + currentNumber;

        if (i === 1) {

            previousValue = currentValue;
            continue;

        }

        difference = Math.abs(currentValue - previousValue);

        if (difference > maxDifference) {

            maxDifference = difference;

        }

        previousValue = currentValue;

    }

    if (maxDifference > 0) {

        console.log(`No, maxdiff=${maxDifference}`);

    } else {

        console.log(`Yes, value=${currentValue}`);

    }
}
equalPair(["3", "1", "2", "0", "3",  "4", "-1"]);
equalPair(["2", "1", "2", "2", "2"]);
equalPair(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPair(["1", "5", "5"]);
equalPair((["2", "-1", "0", "0", "-1"]));
equalPair(["2", "-1", "2", "0", "-1"]);