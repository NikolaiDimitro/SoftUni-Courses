function condeseArrayToNumber(arr) {

    let condensed = [];
    let sum = 0;
    let index = 0;

    while (arr.length > 1) {

        sum = arr[index] + arr[index + 1];
        condensed.push(sum);

        index++;

        if (index === arr.length - 1) {

            arr = condensed;
            condensed = [];
            index = 0;

        }
    }

    if (arr.length === 1) {

        console.log(arr[0]);

    } else {

        console.log(sum);

    }
}
condeseArrayToNumber([2, 10, 3]);
condeseArrayToNumber([5, 0, 4, 1, 2]);
condeseArrayToNumber([1]);