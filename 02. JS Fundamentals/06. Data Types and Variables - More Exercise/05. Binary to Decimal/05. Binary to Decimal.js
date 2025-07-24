function binaryToDecimal(str) {

    let sum = 0;
    let result = 0;
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {

        let numb = Number(str[i]);

        if (count === 0) {

            result = 1 * numb;

        } else {

            result = Math.pow(2, count) * numb;

        }

        count++;
        sum += result;

    }

    console.log(sum);

}
binaryToDecimal('00001001');
binaryToDecimal('11110000');