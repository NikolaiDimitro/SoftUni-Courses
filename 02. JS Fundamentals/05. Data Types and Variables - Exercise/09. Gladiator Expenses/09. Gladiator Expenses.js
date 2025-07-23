function gladiatorExpenses(countLostFight, helmetPrice, swordPrice, shieldPrice, armorPriest) {

    let totalPrice = 0;
    let count = 0;

    for (let i = 1; i <= countLostFight; i++) {

        if (i % 2 === 0) {

            totalPrice += helmetPrice;

        }

        if (i % 3 === 0) {

            totalPrice += swordPrice;

        }

        if (i % 2 === 0 && i % 3 === 0) {

            totalPrice += shieldPrice;
            count++;

            if (count > 0 && count % 2 === 0) {

                totalPrice += armorPriest;

            }
        }
    }

    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);

}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);