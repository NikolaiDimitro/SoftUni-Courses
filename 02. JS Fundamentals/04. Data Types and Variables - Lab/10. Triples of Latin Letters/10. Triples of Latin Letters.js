function tripleOfLatinLetter(n) {

    n = Number(n);

    for (let i = 97; i < 97 + n; i++) {

        for (let j = 97; j < 97 + n; j++) {

            for (let k = 97; k < 97 + n; k++) {

                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j)
                let thirdLetter = String.fromCharCode(k)

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);

            }
        }
    }
}
tripleOfLatinLetter('3');
tripleOfLatinLetter('2');