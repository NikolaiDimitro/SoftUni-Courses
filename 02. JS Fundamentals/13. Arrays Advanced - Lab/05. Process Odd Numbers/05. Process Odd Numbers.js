function processOddNumbers(arr) {

    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (i % 2 === 1) {

            oddArr.push(current * 2);

        }
    }

    console.log(oddArr.reverse().join(' '));

}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);