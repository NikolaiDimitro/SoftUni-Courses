function familyTrip(budget, countNigths, priceNigths, percentOtherExpenses) {

    let totalPrice = countNigths * priceNigths;

    if (countNigths > 7) {

        totalPrice *= 0.95;

    }

    totalPrice += (percentOtherExpenses / 100) * budget;

    if (budget >= totalPrice) {

        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);

    } else {

        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`);

    }
}
familyTrip(800.50, 8, 100, 2);
familyTrip(500, 7, 66, 15);