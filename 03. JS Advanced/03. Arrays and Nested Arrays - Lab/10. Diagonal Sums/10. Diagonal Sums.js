function diagonalSums(arr) {

    let sumOfFirstDiagonal = 0;
    let sumOfSecondDiagonal = 0;
    let indexOfFirstDiagonal = 0;
    let indexOfSecondDiagonal = arr.length - 1;

    arr.forEach((el) => {

        sumOfFirstDiagonal += el[indexOfFirstDiagonal];
        sumOfSecondDiagonal += el[indexOfSecondDiagonal];
        indexOfFirstDiagonal++;
        indexOfSecondDiagonal--;
    })

    return [sumOfFirstDiagonal, sumOfSecondDiagonal].join(' ')

}
diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);