function signCheck(x, y, z) {

    let isPossitive = checkNegativeNumbers(x, y, z);

    if (isPossitive) {

        console.log('Positive');

    } else {

        console.log('Negative');

    }

    function checkNegativeNumbers(x, y, z) {

        let count = 0;

        if (x < 0) {

            count++

        }

        if (y < 0) {

            count++

        }

        if (z < 0) {

            count++

        }

        if (count % 2 === 0) {

            return true;

        } else {

            return false;

        }
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);