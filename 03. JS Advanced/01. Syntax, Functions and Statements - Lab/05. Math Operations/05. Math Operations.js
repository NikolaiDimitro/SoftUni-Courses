function mathOperations(first, second, operation) {

    let result = 0

    if (operation === '+') {

        result = first + second;

    } else if (operation === '-') {

        result = first - second;

    } else if (operation === '*') {

        result = first * second;

    } else if (operation === '/') {

        result = first / second;

    } else if (operation === '%') {

        result = first % second;

    } else {

        result = first ** second;

    }

    console.log(result);

}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');