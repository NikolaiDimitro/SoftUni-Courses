function processOddPositions(arr) {

    arr = arr.filter((x, index) => index % 2 === 1);
    arr.filter((value, index) => { arr[index] *= 2; });
    arr.reverse();
    return arr;

}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);