function easterBakery(priceFlour, kiloFlour, kiloSugar, countPeelEggs, packetsOfYeast) {

    let priceSugar = priceFlour * 0.75;
    let pricePeelEgg = priceFlour * 1.1;
    let priceToYeast = priceSugar * 0.2;

    console.log((priceFlour * kiloFlour + priceSugar * kiloSugar + pricePeelEgg * countPeelEggs + priceToYeast * packetsOfYeast).toFixed(2));

}
easterBakery(50, 10, 3.5, 6, 1);
easterBakery(63.44, 3.57, 6.35, 8, 2);