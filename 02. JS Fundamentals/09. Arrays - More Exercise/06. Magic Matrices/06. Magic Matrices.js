function magicMatrices(matrix) {

    if (matrix.length === 0 || matrix[0].length === 0) {

        return false;

    }

    let referenceSum = matrix[0].reduce((acc, num) => acc + num, 0);

    for (let i = 1; i < matrix.length; i++) {

        let rowSum = matrix[i].reduce((acc, num) => acc + num, 0);

        if (rowSum !== referenceSum) {

            return false;

        }
    }

    for (let j = 0; j < matrix[0].length; j++) {

        let colSum = 0;

        for (let i = 0; i < matrix.length; i++) {

            colSum += matrix[i][j];

        }

        if (colSum !== referenceSum) {

            return false;

        }
    }

    return true;

}
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);