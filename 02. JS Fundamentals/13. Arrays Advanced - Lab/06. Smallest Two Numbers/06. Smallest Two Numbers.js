function smallestTwoNumbers(arr) {

    arr = arr.sort((a, b) => { return a - b; })
    console.log(`${arr[0]} ${arr[1]}`);

}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);