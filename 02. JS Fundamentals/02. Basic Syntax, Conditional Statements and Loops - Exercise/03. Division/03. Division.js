function division(n) {

    let countWith2 = 0;
    let countWith3 = 0;
    let countWith6 = 0;
    let countWith7 = 0;
    let countWi10 = 0;
    let maxNumber = 0;

    if (n % 2 === 0) {

        countWith2++;
        maxNumber = 2;

    }

    if (n % 3 === 0) {

        countWith3++;
        maxNumber = 3;

    }

    if (n % 6 === 0) {

        countWith6++;
        maxNumber = 6;

    }

    if (n % 7 === 0) {

        countWith7++;
        maxNumber = 7;

    }

    if (n % 10 === 0) {

        countWi10++;
        maxNumber = 10;

    }

    if (countWith2 === 1 && countWith3 === 1) {

        maxNumber = 6;

    }

    if (countWith2 === 1 && countWi10 === 1) {

        maxNumber = 10;

    }

    if (countWith2 === 0 && countWith3 === 0 && countWith6 === 0 && countWith7 === 0 && countWi10 === 0) {

        console.log('Not divisible');

    } else {

        console.log(`The number is divisible by ${maxNumber}`);

    }
}
division(30);
division(15);
division(12);
division(1643);