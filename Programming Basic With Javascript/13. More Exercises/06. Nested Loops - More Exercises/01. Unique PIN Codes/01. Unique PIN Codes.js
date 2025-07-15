function uniquePinCodes(first, second, third) {

    for (let i = 1; i <= first; i++) {

        for (let j = 1; j <= second; j++) {

            for (let k = 1; k <= third; k++) {

                if (i % 2 === 0 && k % 2 === 0 && (j / 2 === 1 || j / 3 === 1 || j / 5 === 1 || j / 7 === 1)) {

                    console.log(`${i} ${j} ${k}`);

                }
            }
        }
    }
}
uniquePinCodes(3, 5, 5);
uniquePinCodes(8, 2, 8);