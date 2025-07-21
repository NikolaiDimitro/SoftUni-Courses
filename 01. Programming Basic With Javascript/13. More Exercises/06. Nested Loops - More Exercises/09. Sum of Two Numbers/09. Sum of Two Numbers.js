function sumOfTwoNumbers(start, end, magicNumber) {

    let count = 0;
    let isMagicNumber = false;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            count++;

            if (isMagicNumber) {

                break;

            }

            if ((i + j) === magicNumber) {

                isMagicNumber = true;
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                break;

            }
        }
    }

    if (isMagicNumber === false) {

        console.log(`${count} combinations - neither equals ${magicNumber}`);

    }
}
sumOfTwoNumbers(1, 10, 5);
sumOfTwoNumbers(88, 888, 1000);
sumOfTwoNumbers(23, 24, 20);
sumOfTwoNumbers(88, 888, 2000);