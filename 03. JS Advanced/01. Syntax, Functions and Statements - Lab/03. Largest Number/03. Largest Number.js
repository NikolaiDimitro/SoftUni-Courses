function largestNumber(first, second, third) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    if (first > maxNumber) {

        maxNumber = first;

    }

    if (second > maxNumber) {

        maxNumber = second;

    }

    if (third > maxNumber) {

        maxNumber = third;

    }

    console.log(`The largest number is ${maxNumber}.`);

}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);