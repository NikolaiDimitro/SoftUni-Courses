function greatestCommonDivisorGCD(n, m) {

    let minNumber = Math.min(n, m);
    let sum = 0;

    for (let i = 1; i <= minNumber; i++) {

        if (n % i === 0 && m % i === 0) {

            sum = i;

        }
    }

    console.log(sum);

}
greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);