function numbersDivisibleBy9(a, b) {

    let result = 0;

    for (let i = a; i <= b; i++) {

        if (i % 9 === 0) {

            result += i;

        }
    }

    console.log(`The sum: ${result}`);

    for (let i = a; i <= b; i++) {

        if (i % 9 === 0) {

            console.log(i);

        }
    }
}
numbersDivisibleBy9(100, 200);