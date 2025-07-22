function sortNumbers(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {

        console.log(num1);

        if (num2 > num3) {

            console.log(num2);
            console.log(num3);

        } else {

            console.log(num3);
            console.log(num2);

        }

    } else if (num2 > num1 && num2 > num3) {

        console.log(num2);

        if (num1 > num3) {

            console.log(num1);
            console.log(num3);

        } else {

            console.log(num3);
            console.log(num1);

        }

    } else if (num3 > num1 && num3 > num2) {

        console.log(num3);

        if (num1 > num2) {

            console.log(num1);
            console.log(num2);

        } else {

            console.log(num2);
            console.log(num1);

        }
    }
}
sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);


// function sortNumbers(x, y, z) {

//     let arr = Array(x, y, z);
//     let sortedArr = arr.sort((a, b) => b - a);

//     let first = sortedArr[0];
//     let second = sortedArr[1];
//     let three = sortedArr[2];

//     console.log(first);
//     console.log(second);
//     console.log(three);

// }
// sortNumbers(2, 1, 3);
// sortNumbers(-2, 1, 3);
// sortNumbers(0, 0, 2);