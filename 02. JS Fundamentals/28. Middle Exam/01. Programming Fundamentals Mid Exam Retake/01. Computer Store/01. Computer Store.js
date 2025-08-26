function computerStore(arr) {

    let sum = 0;
    let tax = 0
    let sumWithoutTax = 0;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (current !== 'special' && current !== 'regular') {

            if (Number(current) < 0) {

                console.log('Invalid price!');
                continue;

            }

            sum += Number(current);

        }
    }

    tax = sum * 0.2;
    sumWithoutTax = sum;
    let index = arr.length - 1;
    sum += tax;

    if (arr[index] === 'special') {

        sum *= 0.9;

    }

    if (sum === 0) {

        console.log('Invalid order!');

    } else {

        console.log('Congratulations you\'ve just bought a new computer!');
        console.log(`Price without taxes: ${sumWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${sum.toFixed(2)}$`);

    }
}
computerStore([ '1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore([ '1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);