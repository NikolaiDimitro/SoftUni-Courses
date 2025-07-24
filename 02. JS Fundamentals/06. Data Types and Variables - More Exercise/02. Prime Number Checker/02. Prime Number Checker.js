function primeNumberCheker(n) {

    for (let i = 2; i <= Math.sqrt(n); i++) {

        if (n % i == 0) {

            return false;

        }
    }

    return true;

}
primeNumberCheker(7);
primeNumberCheker(8);
primeNumberCheker(81);