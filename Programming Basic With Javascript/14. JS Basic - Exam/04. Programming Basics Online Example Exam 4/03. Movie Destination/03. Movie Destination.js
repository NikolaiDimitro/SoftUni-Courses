function moveiDestination(budget, destination, season, countDays) {

    let totalPrice = 0;

    switch (destination) {

        case 'Dubai':

            if (season === 'Winter') {

                totalPrice = countDays * 45000;

            } else {

                totalPrice = countDays * 40000;

            }

            totalPrice *= 0.7;

            break;

        case 'Sofia':

            if (season === 'Winter') {

                totalPrice = countDays * 17000;

            } else {

                totalPrice = countDays * 12500;

            }

            totalPrice *= 1.25;

            break;

        case 'London':

            if (season === 'Winter') {

                totalPrice = countDays * 24000;

            } else {

                totalPrice = countDays * 20250;

            }

            break;

    }

    if (budget >= totalPrice) {

        console.log(`The budget for the movie is enough! We have ${(budget - totalPrice).toFixed(2)} leva left!`);

    } else {

        console.log(`The director needs ${(totalPrice - budget).toFixed(2)} leva more!`);

    }
}
moveiDestination(400000, 'Sofia', 'Winter', 20);
moveiDestination(1000000, 'Dubai', 'Summer', 5);
moveiDestination(200000, 'London', 'Summer', 7);