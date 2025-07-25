function equalSum(arr) {

    let sumLeft = 0;
    let sumRight = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {

            let currentLeft = arr[j];
            sumLeft += currentLeft;

        }

        for (let k = i + 1; k < arr.length; k++) {

            let currentRight = arr[k];
            sumRight += currentRight;

        }

        if (sumLeft === sumRight) {

            console.log(i);
            count++;

        }

        sumLeft = 0;
        sumRight = 0;

    }

    if (count === 0) {

        console.log('no');

    }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);