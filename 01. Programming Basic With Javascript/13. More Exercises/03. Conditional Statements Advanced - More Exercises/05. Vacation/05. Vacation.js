function vacation(budget, season) {

    let location = '';
    let place = '';
    let price = 0;

    switch (season) {

        case 'Summer':

            if (budget <= 1000) {

                location = 'Alaska';
                place = 'Camp';
                price = budget * 0.65;

            } else if (budget <= 3000) {

                location = 'Alaska';
                place = 'Hut';
                price = budget * 0.8;

            } else {

                location = 'Alaska';
                place = 'Hotel';
                price = budget * 0.9;

            }

            break

        case 'Winter':

            if (budget <= 1000) {

                location = 'Morocco';
                place = 'Camp';
                price = budget * 0.45;

            } else if (budget <= 3000) {

                location = 'Morocco';
                place = 'Hut';
                price = budget * 0.6;

            } else {

                location = 'Morocco';
                place = 'Hotel';
                price = budget * 0.9;

            }

            break;

    }

    console.log(`${location} - ${place} - ${price.toFixed(2)}`);

}
vacation(800, 'Summer');
vacation(799.50, 'Winter');
vacation(1100, 'Summer');
vacation(2543.99, 'Winter');
vacation(3460, 'Summer');
vacation(5000, 'Winter');