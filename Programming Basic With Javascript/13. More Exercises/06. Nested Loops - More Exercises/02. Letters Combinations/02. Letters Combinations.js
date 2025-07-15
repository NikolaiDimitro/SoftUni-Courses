function lettersCombination(f, s, t) {

    let first = f;
    let second = s;
    let third = t;
    let count = 0;
    let print = '';
    let start = first.charCodeAt();
    let end = second.charCodeAt();

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            for (let k = start; k <= end; k++) {

                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);

                if (firstLetter !== third && secondLetter !== third && thirdLetter !== third) {

                    count++;
                    print += (firstLetter + secondLetter + thirdLetter) + " ";

                }
            }
        }
    }

    console.log(print + "" + count);

}
lettersCombination('a', 'c', 'b');
lettersCombination('f', 'k', 'h');
lettersCombination('a', 'c', 'z');