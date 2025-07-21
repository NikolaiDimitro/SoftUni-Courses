function godzillaVsKong(budget, countStatistics, price) {

    let decors = budget * 0.1;
    let pricetoAllCustums = countStatistics * price;

    if (countStatistics > 150) {

        pricetoAllCustums *= 0.9;

    }

    let totalPrice = decors + pricetoAllCustums;

    if (totalPrice > budget) {

        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);

    } else {

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);

    }
}
godzillaVsKong(20000, 120, 55.5);
godzillaVsKong(15437.62, 186, 57.99);
godzillaVsKong(9587.88, 222, 55.68);