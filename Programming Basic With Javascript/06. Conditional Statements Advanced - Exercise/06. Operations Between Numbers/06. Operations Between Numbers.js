function operationBetweenNumbers(a, b, operation) {

    switch (operation) {

        case '+':

            if ((a + b) % 2 === 0) {

                console.log(`${a} ${operation} ${b} = ${a + b} - ${"even"}`);

            } else {

                console.log(`${a} ${operation} ${b} = ${a + b} - ${"odd"}`);

            }

            break;

        case '-':

            if ((a - b) % 2 === 0) {

                console.log(`${a} ${operation} ${b} = ${a - b} - ${"even"}`);

            } else {

                console.log(`${a} ${operation} ${b} = ${a - b} - ${"odd"}`);

            }

            break;

        case '*':

            if ((a * b) % 2 === 0) {

                console.log(`${a} ${operation} ${b} = ${a * b} - ${"even"}`);

            } else {

                console.log(`${a} ${operation} ${b} = ${a * b} - ${"odd"}`);

            }

            break;

        case '/':

            if (operation === '/' && b === 0) {

                console.log(`Cannot divide ${a} by zero`);

            } else {

                console.log(`${a} / ${b} = ${(a / b).toFixed(2)}`);

            }

            break;

        case '%':

            if (operation === '%' && b === 0) {

                console.log(`Cannot divide ${a} by zero`);

            } else {

                console.log(`${a} % ${b} = ${a % b}`);

            }

            break;

    }
}
operationBetweenNumbers(10, 12, "+");
operationBetweenNumbers(123, 12, "/");
operationBetweenNumbers(112, 0, "/");
operationBetweenNumbers(10, 1, "-");
operationBetweenNumbers(10, 3, "%");
operationBetweenNumbers(10, 0, "%");
operationBetweenNumbers(7, 3, "*");