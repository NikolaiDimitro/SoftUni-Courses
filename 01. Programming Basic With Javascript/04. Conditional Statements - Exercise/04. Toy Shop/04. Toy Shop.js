function toyShop(priceExcursion, countPuzzle, countDoll, countBear, countMinions, countTracks) {

    let totalCount = countPuzzle + countDoll + countBear + countMinions + countTracks;
    let totalPrice = (countPuzzle * 2.60) + (countDoll * 3) + (countBear * 4.1) + (countMinions * 8.2) + (countTracks * 2);

    if (totalCount >= 50) {

        totalPrice *= 0.75;

    }

    totalPrice *= 0.9;

    if (totalPrice >= priceExcursion) {

        console.log(`Yes! ${(totalPrice - priceExcursion).toFixed(2)} lv left.`);

    } else {

        console.log(`Not enough money! ${(priceExcursion - totalPrice).toFixed(2)} lv needed.`);

    }
}
toyShop(40.8, 20, 25, 30, 50, 10);
toyShop(320, 8, 2, 5, 5, 1);