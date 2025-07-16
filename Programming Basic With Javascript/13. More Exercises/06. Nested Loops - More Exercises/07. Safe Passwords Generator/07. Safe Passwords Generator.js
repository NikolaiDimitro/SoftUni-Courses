function safePasswordGenerator(a, b, maxGeneratedPassword) {

    let firstSymbol = 35;
    let secondSymbol = 64;
    let count = 0;
    let print = '';

    for (let x = 1; x <= a; x++) {

        for (let y = 1; y <= b; y++) {

            if (count >= maxGeneratedPassword) {

                console.log(print);
                return;


            }

            print += `${String.fromCharCode(firstSymbol)}${String.fromCharCode(secondSymbol)}${x}${y}${String.fromCharCode(secondSymbol)}${String.fromCharCode(firstSymbol)}|`;
            count++;

            firstSymbol++;
            secondSymbol++;

            if (firstSymbol > 55) firstSymbol = 35;
            if (secondSymbol > 96) secondSymbol = 64;

        }
    }

    console.log(print);

}
safePasswordGenerator(2, 3, 10);
safePasswordGenerator(20, 50, 10);