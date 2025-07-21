function coffeeMachine(drink, sugar, countDrink) {
    
    let pricePerDrink = 0;

    switch (drink) {

        case 'Espresso':

            if (sugar === 'Without') pricePerDrink = 0.9;

            else if (sugar === 'Normal') pricePerDrink = 1.0;

            else pricePerDrink = 1.2;

            break;

        case 'Cappuccino':

            if (sugar === 'Without') pricePerDrink = 1.0;

            else if (sugar === 'Normal') pricePerDrink = 1.2;

            else pricePerDrink = 1.6;

            break;

        case 'Tea':

            if (sugar === 'Without') pricePerDrink = 0.5;

            else if (sugar === 'Normal') pricePerDrink = 0.6;

            else pricePerDrink = 0.7;

            break;

    }

    let totalPrice = pricePerDrink * countDrink;

    if (sugar === 'Without') {

        totalPrice *= 0.65;

    }

    if (drink === 'Espresso' && countDrink >= 5) {

        totalPrice *= 0.75;

    }

    if (totalPrice > 15) {

        totalPrice *= 0.8;

    }

    console.log(`You bought ${countDrink} cups of ${drink} for ${totalPrice.toFixed(2)} lv.`);

}
coffeeMachine('Espresso', 'Without', 10);
coffeeMachine('Cappuccino', 'Normal', 13);
coffeeMachine('Tea', 'Extra', 3);