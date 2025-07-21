function matchTickets(budget, categoryTickets, countPeople) {

    let totalPrice = 0;

    if (countPeople >= 1 && countPeople <= 4) {

        budget *= 0.25;

    } else if (countPeople >= 5 && countPeople <= 9) {

        budget *= 0.4;

    } else if (countPeople >= 10 && countPeople <= 24) {

        budget *= 0.5;

    } else if (countPeople >= 25 && countPeople <= 49) {

        budget *= 0.6;

    } else if (countPeople >= 50) {

        budget *= 0.75;

    }

    if (categoryTickets === 'VIP') {

        totalPrice = countPeople * 499.99;

    } else {

        totalPrice = countPeople * 249.99;

    }

    if (totalPrice <= budget) {

        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`);

    }
}
matchTickets(1000, 'Normal', 1);
matchTickets(30000, 'VIP', 49);