function magicMatrices(arr) {

    let sum = 0;
    let newArr = [];

    for (let row = 0; row < arr.length; row++) {

        let currentRow = arr[row];

        for (let numb of currentRow) {

            sum += numb;

        }

        if (row === 0) {

            newArr.push(sum);

        }

        if (sum < newArr[0]) {

            return false;

        }

        for (let column = 0; column < currentRow.length; column++) {

            let currentColumn = currentRow[row];

        }
    }

    let row = 0;
    let count = 0;
    sum = 0;

    for (let column = 0; column < arr.length * 3; column++) {

        let currentColumn = arr[row][count];
        sum += currentColumn;
        row++;

        if (row === arr.length) {

            row = 0;
            count++;

            if (sum !== newArr[0]) {

                return false;

            }

            sum = 0;

        }
    }

    return true;

}
console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));