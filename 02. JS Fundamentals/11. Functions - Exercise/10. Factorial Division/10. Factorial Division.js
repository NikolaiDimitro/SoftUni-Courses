function factorialDivision(x, y) {

    let firstResult = factorialX(x);
    let secondResult = factorialY(y);

    function factorialX(x) {

        let productFactorielX = 1;

        if (x === 0) {

            return 1;

        }

        for (let i = 1; i <= x; i++) {

            productFactorielX *= i;

        }

        return productFactorielX;

    }

    function factorialY(y) {

        let productFactorielY = 1;

        if (y === 0) {

            return 1;

        }

        for (let i = 1; i <= y; i++) {

            productFactorielY *= i;

        }

        return productFactorielY;

    }

    let totalResult = firstResult / secondResult;

    console.log(totalResult.toFixed(2));

}
factorialDivision(5, 2);
factorialDivision(6, 2);