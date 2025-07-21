function challengeTheWeddong(countMan, countWoman, maxCountTable) {

    let print = '';
    let count = 0;

    for (let i = 1; i <= countMan; i++) {

        for (let j = 1; j <= countWoman; j++) {

            if (count === maxCountTable) {

            } else {

                print += `(${i} <-> ${j}) `;
                count++

            }
        }
    }

    console.log(print);

}
challengeTheWeddong(2, 2, 6);
challengeTheWeddong(2, 2, 3);
challengeTheWeddong(5, 8, 40);