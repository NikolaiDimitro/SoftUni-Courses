function lastKNumbersSequence(n, k) {

    let arr = [1];

    for (let i = 0; i < n; i++) {

        if (n <= arr.length) {

            return arr;

        }

        let sum = 0;

        if (k > arr.length) {

            for (let numb of arr) {

                sum += numb

            }

            arr.push(sum);

        } else {

            for (let j = arr.length - k; j < arr.length; j++) {

                sum += arr[j];

            }

            arr.push(sum);

        }
    }

    console.log(arr);

}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);