function printDNA(n) {

    let count = 1;
    let allLetters = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let count2 = 0;

    for (let i = 0; i < n; i++) {

        if (count2 >= allLetters.length - 2) {

            count2 = 0;

        } else {

            if (i !== 0) {

                count2 += 2;

            }
        }

        if (count === 1) {

            count++;
            console.log(`**${allLetters[count2]}${allLetters[count2 + 1]}**`);

        } else if (count === 2) {

            count++;
            console.log(`*${allLetters[count2]}--${allLetters[count2 + 1]}*`);

        } else if (count === 3) {

            count++;
            console.log(`${allLetters[count2]}----${allLetters[count2 + 1]}`);

        } else if (count === 4) {

            count = 1;
            console.log(`*${allLetters[count2]}--${allLetters[count2 + 1]}*`);

        }
    }
}
printDNA(4);
printDNA(10);