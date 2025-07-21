function luckyNumbers(numb) {

    let fisrtSum = 0;
    let secondSum = 0;
    let print = '';

    for (let i = 1; i <= 9; i++) {

        for (let j = 1; j <= 9; j++) {

            for (let k = 1; k <= 9; k++) {

                for (let l = 1; l <= 9; l++) {

                    fisrtSum = i + j;
                    secondSum = k + l;

                    if (fisrtSum === secondSum && numb % fisrtSum === 0) {

                        print += `${i}${j}${k}${l}` + ' ';

                    }
                }
            }
        }
    }

console.log(print);

}
luckyNumbers(3);
luckyNumbers(7);
luckyNumbers(24);