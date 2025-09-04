function sameNumbers(numb) {

    numb = numb.toString();
    let sum = 0;
    let firstNumber = numb[0];
    let isEqual = true;

    for (let i = 0; i < numb.length; i++) {

        let current = numb[i];

        if (current !== firstNumber) {

            isEqual = false;

        }

        sum += Number(current);

    }

    console.log(isEqual);
    console.log(sum);

}
sameNumbers(2222222);
sameNumbers(1234);