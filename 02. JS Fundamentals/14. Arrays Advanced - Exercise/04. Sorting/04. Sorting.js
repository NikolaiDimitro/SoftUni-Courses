function sorting(arr) {

    arr = arr.sort((a, b) => a - b);
    let sortedArray = [];

    while (arr.length > 0) {

        let biggestNum = arr.pop();
        sortedArray.push(biggestNum);

        if (arr.length > 0) {

            let smallestNum = arr.shift();
            sortedArray.push(smallestNum)

        }
    }

    console.log(sortedArray.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);