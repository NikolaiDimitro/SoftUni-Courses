function maxNumber(arr) {

    let newArray = [];
    let isBigger = false;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i]

        if (i === arr.length - 1) {

            isBigger = true;

        }

        for (let j = i + 1; j < arr.length; j++) {

            let nextNumbers = arr[j];

            if (current > nextNumbers) {

                isBigger = true;

            } else {

                isBigger = false;
                break;

            }
        }

        if (isBigger) {

            newArray.push(current);
            isBigger = false;

        }
    }

    console.log(newArray.join(' '));

}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);