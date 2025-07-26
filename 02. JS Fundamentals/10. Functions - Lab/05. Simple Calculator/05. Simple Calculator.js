function simpleCalculator(x, y, operator) {

    switch (operator) {

        case 'multiply':

            console.log(x * y);

            break;

        case 'divide':

            console.log(x / y);

            break;

        case 'add':

            console.log(x + y);

            break;

        case 'subtract':

            console.log(x - y);

            break;

    }
}
simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');