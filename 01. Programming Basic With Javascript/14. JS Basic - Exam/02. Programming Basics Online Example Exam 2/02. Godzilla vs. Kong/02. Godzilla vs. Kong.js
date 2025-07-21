function godzillaVsKong(budget, countExtras, priceOfClothing) {

    let decors = budget * 0.1;
    let totalClothing = countExtras * priceOfClothing;

    if (countExtras > 150) {

        totalClothing *= 0.9;

    }

    let total = decors + totalClothing;

    if (budget >= total) {

        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - total).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(total - budget).toFixed(2)} leva more.`);

    }
}
godzillaVsKong(20000, 120, 55.5,);
godzillaVsKong(15437.62, 186, 57.99,);
godzillaVsKong(9587.88, 222, 55.68,);