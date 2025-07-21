function secretDoorsLock(upperLimitOfHundreds, upperLimitTfTens, upperLimitOfUnits) {

    for (let i = 2; i <= upperLimitOfHundreds; i++) {

        for (let j = 2; j <= 7; j++) {

            for (let k = 2; k <= upperLimitOfUnits; k++) {

                if (i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)) {

                    if (j <= upperLimitTfTens) {

                        console.log(`${i} ${j} ${k}`);

                    }
                }
            }
        }
    }
}
secretDoorsLock(3, 5, 5);
secretDoorsLock(8, 2, 8);