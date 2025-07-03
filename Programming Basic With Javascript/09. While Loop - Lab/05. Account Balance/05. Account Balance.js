function accountBalance(arr) {

    let index = 0;

    let total = 0;

    while (arr[index] !== 'NoMoreMoney') {

        let numb = Number(arr[index]);

        if (numb < 0) {

            console.log('Invalid operation!');
            break;

        }

        total += numb;
        console.log(`Increase: ${numb.toFixed(2)}`);

        index++;

    }

    console.log(`Total: ${total.toFixed(2)}`);

}
accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
accountBalance(["120", "45.55", "-150"]);