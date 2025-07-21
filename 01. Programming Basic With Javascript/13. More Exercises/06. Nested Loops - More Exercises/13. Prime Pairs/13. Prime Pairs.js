function primePairs(startForFirstPair, startForSecondPair, differentForFirstPair, differentForSecondPair) {

    let endForFisrPair = startForFirstPair + differentForFirstPair;
    let endForSecondPair = startForSecondPair + differentForSecondPair;

    for (let i = startForFirstPair; i <= endForFisrPair; i++) {

        if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {

            continue;

        }

        for (let j = startForSecondPair; j <= endForSecondPair; j++) {

            if (j % 2 === 0 || j % 3 === 0 || j % 5 === 0 || j % 7 === 0) {

                continue;

            }

            console.log(`${i}${j}`);

        }
    }
}
primePairs(10, 20, 5, 5);
primePairs(10, 30, 9, 6);