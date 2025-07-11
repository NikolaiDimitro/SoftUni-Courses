function multuplyByTwo(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {

            console.log('Negative number!');

        } else {

            console.log(`Result: ${(Number(arr[i]) * 2).toFixed(2)}`);

        }
    }
}
multuplyByTwo(["12", "43.2144", "12.3", "543.23", "-20"]);
multuplyByTwo((["23.43", "12.3245", "0", "65.23432", "23", "65", "-12"]));
multuplyByTwo(([-123]));