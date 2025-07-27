function spiralMatrix(rows, cols) {

    const matrix = Array.from({ length: rows }, () => Array(cols).fill(0));

    let top = 0,
        bottom = rows - 1,
        left = 0,
        right = cols - 1;

    let currentNumber = 1;

    while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++) {

            matrix[top][i] = currentNumber++;

        }

        top++;

        for (let i = top; i <= bottom; i++) {

            matrix[i][right] = currentNumber++;

        }

        right--;

        if (top <= bottom) {

            for (let i = right; i >= left; i--) {

                matrix[bottom][i] = currentNumber++;

            }

            bottom--;

        }

        if (left <= right) {

            for (let i = bottom; i >= top; i--) {

                matrix[i][left] = currentNumber++;

            }

            left++;

        }
    }

    for (let i = 0; i < rows; i++) {

        console.log(matrix[i].join(' '));

    }
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);