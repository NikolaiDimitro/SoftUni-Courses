function distinctArray(arr) {

    let newArray = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        for (let j = 0; j < newArray.length; j++) {

            let currentOfNewArray = newArray[j];

            if (current === currentOfNewArray) {

                count++;
                break;

            }
        }

        if (count === 0) {

            newArray.push(current);

        }

        count = 0;

    }

    console.log(newArray.join(' '));

}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);