function specialNumbers(n) {

    let sum = 0;
    let isTrue = 'False';

    for (let i = 1; i <= n; i++) {

        let num = i;

        while (num !== 0) {

            sum += num % 10;
            num = parseInt(num / 10)

        }

        if (sum === 5 || sum === 7 || sum === 11) {

            isTrue = 'True';

        }

        console.log(`${i} -> ${isTrue}`);
        isTrue = 'False';
        sum = 0;

    }
}
specialNumbers(15);
specialNumbers(20);