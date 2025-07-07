function vegetableMarket(priceVegetables, priceFruits, totalKiloVegetable, totalKiloFruits) {

    console.log((((priceVegetables * totalKiloVegetable) + (priceFruits * totalKiloFruits)) / 1.94).toFixed(2));

}
vegetableMarket(0.194, 19.4, 10, 10);
vegetableMarket(1.5, 2.5, 10, 10);