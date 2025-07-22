function sortNumbers(x, y, z) {

    let arr = Array(x, y, z);
    let sortedArr = arr.sort((a, b) => b - a);

    let first = sortedArr[0];
    let second = sortedArr[1];
    let three = sortedArr[2];

    console.log(first);
    console.log(second);
    console.log(three);

}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);