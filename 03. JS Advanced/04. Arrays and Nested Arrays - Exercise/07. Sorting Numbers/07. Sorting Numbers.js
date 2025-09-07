function sortingNumbers(arr) {

    arr.sort((a, b) => a - b);
    let first = arr.slice(0, arr.length / 2);
    let second = arr.slice(arr.length / 2).reverse();
    let max = 0;
    let newArray = [];

    if (first.length >= second.length) {

        max = first.length;

    } else {

        max = second.length;

    }

    for (let i = 0; i <= max; i++) {

        let firstNumbers = first[i];
        let secondNumber = second[i];

        if (firstNumbers) {

            newArray.push(firstNumbers);

        }

        if (secondNumber) {

            newArray.push(secondNumber);

        }
    }

    return newArray;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);