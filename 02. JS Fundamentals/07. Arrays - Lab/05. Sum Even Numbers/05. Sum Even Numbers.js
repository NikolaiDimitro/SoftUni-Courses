function sumEvenSumbers(arr) {

    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {

        let current = Number(arr[i])

        if (current % 2 === 0) {

            sum += current;

        }
    }

    console.log(sum);

}
sumEvenSumbers(['1', '2', '3', '4', '5', '6']);
sumEvenSumbers(['3', '5', '7', '9']);
sumEvenSumbers(['2', '4', '6', '8', '10']);