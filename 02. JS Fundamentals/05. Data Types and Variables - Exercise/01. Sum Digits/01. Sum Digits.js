function sumDigit(n) {

    let numb = n.toString();
    let sum = 0;

    for (let i = 0; i < numb.length; i++) {

        sum += Number(numb[i]);

    }

    console.log(sum);

}
sumDigit(245678);
sumDigit(97561);
sumDigit(543);