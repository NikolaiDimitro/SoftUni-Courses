function smallestOfThreeNumbers(x, y, z) {

    let minNumber = Number.MAX_SAFE_INTEGER;

    if (x <= y && x <= z) {

        minNumber = x;

    } else if (y < x && y <= z) {

        minNumber = y;

    } else if (z > x && x > y) {

        minNumber = z;

    } else {

        minNumber = z;

    }

    console.log(minNumber);

}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);