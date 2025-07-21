function summPrimeNonPrime(arr) {

    let index = 0;
    let summPrimeNumber = 0;
    let summNonPrimeNumber = 0;

    while (arr[index] !== 'stop') {

        let numb = Number(arr[index]);

        if (numb < 0) {

            console.log('Number is negative.');

            index++;
            continue;

        }

        isPrime = true;

        for (let i = 2; i < numb; i++) {

            if (numb % i === 0) {

                isPrime = false;
                break;

            }
        }

        if (isPrime) {

            summPrimeNumber += numb;

        } else {

            summNonPrimeNumber += numb;

        }

        index++;

    }

    console.log(`Sum of all prime numbers is: ${summPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${summNonPrimeNumber}`);

}
summPrimeNonPrime((["3", "9", "0", "7", "19", "4", "stop"]));
summPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
summPrimeNonPrime(["0", "-9", "0", "stop"]);