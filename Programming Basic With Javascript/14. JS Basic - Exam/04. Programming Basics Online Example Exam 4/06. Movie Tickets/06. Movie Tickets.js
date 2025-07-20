function movieTickets(a1, a2, n) {

    for (let one = a1; one <= a2 - 1; one++) {

        if (one % 2 === 0) {

            continue;

        }

        let number1 = String.fromCharCode(one);
        let number4 = one;

        for (let two = 1; two <= n - 1; two++) {

            for (let three = 1; three <= n / 2 - 1; three++) {

                if ((two + three + number4) % 2 === 1) {

                    let number2 = two;
                    let number3 = three;

                    console.log(`${number1}-${number2}${number3}${number4}`);

                }
            }
        }
    }
}
movieTickets(86, 88, 4);
movieTickets(71, 74, 6);
movieTickets(69, 72, 4);