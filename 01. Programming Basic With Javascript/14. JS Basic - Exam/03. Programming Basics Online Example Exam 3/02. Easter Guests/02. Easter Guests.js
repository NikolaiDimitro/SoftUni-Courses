function easterGuests(countGuests, budget) {

    if (budget >= ((Math.ceil(countGuests / 1 / 3)) * 4 + (countGuests * 2) * 0.45)) {

        console.log(`Lyubo bought ${Math.ceil(countGuests / 1 / 3)} Easter bread and ${countGuests * 2} eggs.`);
        console.log(`He has ${(budget - ((Math.ceil(countGuests / 1 / 3)) * 4 + (countGuests * 2) * 0.45)).toFixed(2)} lv. left.`);

    } else {

        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${((Math.ceil(countGuests / 1 / 3) * 4 + (countGuests * 2) * 0.45) - budget).toFixed(2)} lv. more.`);

    }
}
easterGuests(10, 35);
easterGuests(9, 12);