function numberModidication(n) {

    let averageNumber = checkAverageSum(n);

    while (averageNumber < 5) {

        if (averageNumber < 5) {

            n = add9(n);

        }

        averageNumber = checkAverageSum(n)

    }

    if (averageNumber > 5) {

        console.log(n);

    }

    function checkAverageSum(n) {

        let numb = n.toString();
        let sum = 0;
        let count = 0;

        for (let i = 0; i < numb.length; i++) {

            let current = Number(numb[i]);
            count++;
            sum += current;

        }

        return sum / count;

    }

    function add9(n) {

        n = n.toString();
        n += '9';
        return n = Number(n);

    }
}
numberModidication(101);
numberModidication(5835);