function jansNotation(arr) {

    let arrayForNumbers = [];
    let result = 0;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (current !== '+' && current !== '-' && current !== '*' && current !== '/') {

            arrayForNumbers.push(current);

        } else {

            if (arrayForNumbers.length > 1) {

                let second = arrayForNumbers.pop();
                let first = arrayForNumbers.pop();
                let operator = arr[i];

                if (operator === '+') {

                    result = first + second;

                } else if (operator === '-') {

                    result = first - second;

                } else if (operator === '*') {

                    result = first * second;

                } else {

                    result = first / second;

                }

                arrayForNumbers.push(result);

            } else {

                console.log('Error: not enough operands!');
                return;

            }
        }
    }

    if (arrayForNumbers.length === 1) {

        console.log(arrayForNumbers.join(''));

    } else {

        console.log('Error: too many operands!');

    }
}
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);
jansNotation([31, 2, '+', 11, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);