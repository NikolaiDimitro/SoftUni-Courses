function hotelRoom(month, countNight) {

    let studioPrice = 0;
    let apartamentPrice = 0;

    switch (month) {

        case 'May':
        case 'October':

            studioPrice = countNight * 50;
            apartamentPrice = countNight * 65;

            if (countNight > 7 && countNight <= 14) {

                studioPrice *= 0.95;

            }

            if (countNight > 14) {

                studioPrice *= 0.7;
                apartamentPrice *= 0.9;

            }

            break;

        case 'June':
        case 'September':

            studioPrice = countNight * 75.20;
            apartamentPrice = countNight * 68.70;

            if (countNight > 14) {

                apartamentPrice *= 0.9;
                studioPrice *= 0.8;

            }

            break;

        case 'July':
        case 'August':

            studioPrice = countNight * 76;
            apartamentPrice = countNight * 77;

            if (countNight > 14) {

                apartamentPrice *= 0.9;

            }

            break;

    }

    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
hotelRoom("May", 15);
hotelRoom("June", 14);
hotelRoom("August", 20);