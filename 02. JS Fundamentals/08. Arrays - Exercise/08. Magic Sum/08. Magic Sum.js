function magicSum(arr, numb) {

    let sum = 0;
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        let currentNumber = arr[i];

        for (let j = i + 1; j < arr.length; j++) {

            let nextNumber = arr[j];
            sum += currentNumber + nextNumber;

            if (sum === numb) {

                newArray.push(currentNumber);
                newArray.push(nextNumber)
                console.log(newArray.join(' '));
                sum = 0;
                newArray = [];

            }

            sum = 0;
            newArray = [];

        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);