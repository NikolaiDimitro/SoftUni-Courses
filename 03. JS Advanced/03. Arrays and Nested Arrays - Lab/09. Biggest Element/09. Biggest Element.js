function biggestElement(arr) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let elements of arr) {

        for (let numb of elements) {

            if (numb > maxNumber) {

                maxNumber = numb;

            }
        }
    }

    return maxNumber;

}
biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);