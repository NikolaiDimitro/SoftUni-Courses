function triangleOfNumbers(n) {

    let print = '';

    for (let i = 1; i <= n; i++) {

        for (let j = 1; j <= i; j++) {

            print += i + ' ';

        }
        console.log(print);
        print = '';

    }
}
triangleOfNumbers(3);
triangleOfNumbers(5);
triangleOfNumbers(6);