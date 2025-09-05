function negativePositiveNumbers(arr) {

    let newArr = [];

    for (let num of arr) {

        if (num < 0) {

            newArr.unshift(num);

        } else {

            newArr.push(num);

        }
    }

    for (let numb of newArr) {

        console.log(numb);

    }
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);