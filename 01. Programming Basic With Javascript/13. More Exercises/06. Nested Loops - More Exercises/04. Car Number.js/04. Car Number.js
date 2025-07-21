function carNumbert(start, end) {

    let result = '';

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            for (let k = start; k <= end; k++) {

                for (let l = start; l < end; l++) {

                    if (i % 2 === 0 && l % 2 === 1 && i > l && (j + k) % 2 === 0) {

                        result += `${i}${j}${k}${l} `;

                    } else if (i % 2 === 1 && l % 2 === 0 && i > l && (j + k) % 2 === 0) {

                        result += `${i}${j}${k}${l} `;

                    }
                }
            }
        }
    }

    console.log(result);

}
carNumbert(2, 3);
carNumbert(3, 5);
carNumbert(5, 8);