function cleverLily(year, priceToWashingMachine, pricetoToys) {

    let summ = 0;

    for (let i = 1; i <= year; i++) {

        if (i % 2 === 0) {

            summ += ((i / 2) * 10);
            summ -= 1

        } else {

            summ += pricetoToys;

        }
    }

    if (summ >= priceToWashingMachine) {

        console.log(`Yes! ${(summ - priceToWashingMachine).toFixed(2)}`);

    } else {

        console.log(`No! ${(priceToWashingMachine - summ).toFixed(2)}`);

    }
}
cleverLily(10, 170.00, 6);
cleverLily(21, 1570.98, 3);