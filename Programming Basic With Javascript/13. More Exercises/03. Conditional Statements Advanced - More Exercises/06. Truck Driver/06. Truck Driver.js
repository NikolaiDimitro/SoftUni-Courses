function truckDriver(season, kilometersForMonth) {

    let totalPrice = 0;

    switch (season) {

        case 'Spring':
        case 'Autumn':

            if (kilometersForMonth <= 5000) {

                totalPrice = kilometersForMonth * 0.75 * 4;

            } else if (kilometersForMonth <= 10000) {

                totalPrice = kilometersForMonth * 0.95 * 4;

            } else if (kilometersForMonth <= 20000) {

                totalPrice = kilometersForMonth * 1.45 * 4;

            }

            break;

        case 'Summer':

            if (kilometersForMonth <= 5000) {

                totalPrice = kilometersForMonth * 0.9 * 4;

            } else if (kilometersForMonth <= 10000) {

                totalPrice = kilometersForMonth * 1.1 * 4;

            } else if (kilometersForMonth <= 20000) {

                totalPrice = kilometersForMonth * 1.45 * 4;

            }

            break;

        case 'Winter':

            if (kilometersForMonth <= 5000) {

                totalPrice = kilometersForMonth * 1.05 * 4;

            } else if (kilometersForMonth <= 10000) {

                totalPrice = kilometersForMonth * 1.25 * 4;

            } else if (kilometersForMonth <= 20000) {

                totalPrice = kilometersForMonth * 1.45 * 4;

            }

            break;

    }

    totalPrice *= 0.9;

    console.log(totalPrice.toFixed(2));

}
truckDriver('Summer', 3455);
truckDriver('Winter', 4350);
truckDriver('Winter', 5678);
truckDriver('Winter', 16042);
truckDriver('Spring', 1600);
truckDriver('Autumn', 8600);
truckDriver('Spring', 16942);