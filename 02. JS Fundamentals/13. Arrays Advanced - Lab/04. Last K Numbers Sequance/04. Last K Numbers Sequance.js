function lastKNumbersSequance(n, k) {

    let sequance = [1];
    let sum = 0;

    for (let i = 0; i < n; i++) {

        let start = Math.max(0, i - k);
        let end = i - 1;

        for (let j = start; j <= end; j++) {

            sum += sequance[j];

        }

        if (sum !== 0) {

            sequance.push(sum);
            sum = 0;

        }
    }

    console.log(sequance.join(' '));

}
lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);