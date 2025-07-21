function passwordGenerator(n, l) {

    let maxNumber = 1;
    let print = '';

    for (let a = 1; a < n; a++) {

        for (let b = 1; b < n; b++) {

            for (let c = 97; c <= 97 + l - 1; c++) {

                for (let d = 97; d <= 97 + l - 1; d++) {

                    if (a > b) {

                        maxNumber = a + 1;

                    } else if (b > a) {

                        maxNumber = b + 1;

                    } else {

                        maxNumber = a + 1;

                    }

                    for (let e = maxNumber; e <= n; e++) {

                        print += `${a}${b}${String.fromCharCode(c)}${String.fromCharCode(d)}${e} `;

                    }
                }
            }
        }
    }

    console.log(print);

}
passwordGenerator(2, 4);
passwordGenerator(3, 1);
passwordGenerator(3, 2);
passwordGenerator(4, 2);