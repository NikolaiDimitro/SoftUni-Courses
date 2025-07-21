function backToThePast(inheritedMoney, year) {

    let moneySpent = 0;
    let completedYears = 18;

    for (let i = 1800; i <= year; i++) {

        if (i % 2 === 0) {

            moneySpent += 12000;
            completedYears++;

        } else {

            moneySpent += 12000 + (50 * completedYears);
            completedYears++;

        }
    }

    if (inheritedMoney >= moneySpent) {

        console.log(`Yes! He will live a carefree life and will have ${(inheritedMoney - moneySpent).toFixed(2)} dollars left.`);

    } else {

        console.log(`He will need ${(moneySpent - inheritedMoney).toFixed(2)} dollars to survive.`);

    }
}
backToThePast(50000, 1802);
backToThePast(100000.15, 1808);