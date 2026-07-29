function foodDelivery(countChickenMenu, countFishMenu, countVegeterianMenu) {

    let priceForAllMenus = (countChickenMenu * 10.35) + (countFishMenu * 12.40) + (countVegeterianMenu * 8.15);
    let dessertPrice = priceForAllMenus * 0.2;

    console.log(priceForAllMenus + dessertPrice + 2.50);

}
foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);