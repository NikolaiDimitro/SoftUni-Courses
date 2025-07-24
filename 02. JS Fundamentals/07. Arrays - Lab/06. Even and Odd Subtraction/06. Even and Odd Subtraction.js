function evenAndOddSubtraction(arr) {

    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for (let i = 0; i < arr.length; i++) {

        let current = Number(arr[i]);

        if (current % 2 === 0) {

            sumEvenNumbers += current;

        } else {

            sumOddNumbers += current;

        }
    }

    console.log(sumEvenNumbers - sumOddNumbers);

}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);