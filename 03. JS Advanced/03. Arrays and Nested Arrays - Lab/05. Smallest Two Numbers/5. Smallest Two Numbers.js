function smallestTwoNumbers(arr) {

    arr.sort((a, b) => a - b);
    let newArr = [];

    for (let i = 0; i < 2; i++) {

        newArr.push(arr[i]);

    }

    console.log(newArr.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);