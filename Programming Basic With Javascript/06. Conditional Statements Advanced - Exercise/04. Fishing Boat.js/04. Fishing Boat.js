function fishingBoat(budget, season, couuntFisherman) {

    let price = 0;

    switch (season) {

        case 'Spring':

            price = 3000;
            break;

        case 'Summer':
        case 'Autumn':

            price = 4200;

            break;

        case 'Winter':

            price = 2600;
            break;

    }

    if (couuntFisherman <= 6) {

        price *= 0.9;

    } else if (couuntFisherman <= 11) {

        price *= 0.85;

    } else {

        price *= 0.75

    }

    if (season === 'Spring' && couuntFisherman % 2 === 0 || season === 'Summer' && couuntFisherman % 2 === 0 || season === 'Winter' && couuntFisherman % 2 === 0) {

        price *= 0.95;

    }

    if (budget >= price) {

        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);

    }
}
fishingBoat(3000, "Summer", 11);
fishingBoat(3600, "Autumn", 6);
fishingBoat(2000, "Winter", 13);