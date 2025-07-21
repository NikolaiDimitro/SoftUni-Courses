function equalSumsEvenOddPossition(first, second) {

    let print = '';

    for (let i = first; i <= second; i++) {

        let currentNum = '' + i;
        let oddSum = 0;
        let eventSum = 0;

        for (let j = 0; j <= currentNum.length; j++) {

            let currentDigit = Number(currentNum.charAt(j))

            if (j % 2 === 0) {

                eventSum += currentDigit;

            } else {

                oddSum += currentDigit;

            }
        }

        if (oddSum === eventSum) {

            print += `${i} `;

        }
    }

    console.log(print);

}
equalSumsEvenOddPossition(100000, 100050);
equalSumsEvenOddPossition(123456, 124000);
equalSumsEvenOddPossition(299900, 300000);
equalSumsEvenOddPossition(100115, 100120);