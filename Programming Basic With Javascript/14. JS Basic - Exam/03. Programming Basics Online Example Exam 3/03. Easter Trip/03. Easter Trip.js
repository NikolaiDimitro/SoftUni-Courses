function easterTrip(destination, date, countNight) {

    let price = 0;

    switch (destination) {

        case 'France':

            if (date === '21-23') {

                price = countNight * 30;

            } else if (date === '24-27') {

                price = countNight * 35;

            } else {

                price = countNight * 40;

            }

            break;

        case 'Italy':

            if (date === '21-23') {

                price = countNight * 28;

            } else if (date === '24-27') {

                price = countNight * 32;

            } else {

                price = countNight * 39;

            }

            break;

        case 'Germany':

            if (date === '21-23') {

                price = countNight * 32;

            } else if (date === '24-27') {

                price = countNight * 37;

            } else {

                price = countNight * 43;

            }

            break;

    }

    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);

}
easterTrip('Germany', '24-27', 5);
easterTrip('Italy', '21-23', 7);
easterTrip('France', '28-31', 8);