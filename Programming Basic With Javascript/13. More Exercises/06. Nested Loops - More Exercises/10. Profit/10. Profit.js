function profit(countCoinOneLevs, countCoinTwoLevs, countBanknotesOfFiveLevs, sum) {

    for (let i = 0; i <= countCoinOneLevs; i++) {

        for (let j = 0; j <= countCoinTwoLevs; j++) {

            for (let k = 0; k <= countBanknotesOfFiveLevs; k++) {

                if ((i * 1 + j * 2 + k * 5) === sum) {

                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);

                }
            }
        }
    }
}
profit(3, 2, 3, 10);
profit(5, 3, 1, 7);