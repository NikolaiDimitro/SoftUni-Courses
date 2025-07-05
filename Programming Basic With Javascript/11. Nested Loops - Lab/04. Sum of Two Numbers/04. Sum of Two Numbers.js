function sumOfTwoNumber(start, end, magicNumber) {

    let count = 0;
    let total = 0;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            if ((i + j) === magicNumber) {

                console.log(`Combination N:${count + 1} (${i} + ${j} = ${magicNumber})`);
                total++;
                break;

            }

            count++

        }

        if (total === 1) {

            break;

        }
    }

    if (total === 0) {

        console.log(`${count} combinations - neither equals ${magicNumber}`);

    }
}
sumOfTwoNumber(1, 10, 5);
sumOfTwoNumber(88, 888, 1000);
sumOfTwoNumber(23, 24, 20);
sumOfTwoNumber(88, 888, 2000);