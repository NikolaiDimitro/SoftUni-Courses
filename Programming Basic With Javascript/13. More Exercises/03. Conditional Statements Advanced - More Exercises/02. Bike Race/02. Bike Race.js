function bikeRace(countJuniorCyclists, countSeniorCyclists, typeRoute) {

    let totalPrice = 0;

    switch (typeRoute) {

        case 'trail':

            totalPrice = countJuniorCyclists * 5.5 + countSeniorCyclists * 7;
            break;

        case 'cross-country':

            totalPrice = countJuniorCyclists * 8 + countSeniorCyclists * 9.5;

            if ((countJuniorCyclists + countSeniorCyclists) >= 50) {

                totalPrice *= 0.75;

            }

            break;

        case 'downhill':

            totalPrice = countJuniorCyclists * 12.25 + countSeniorCyclists * 13.75;
            break;

        case 'road':

            totalPrice = countJuniorCyclists * 20 + countSeniorCyclists * 21.5;
            break;

    }

    totalPrice *= 0.95;

    console.log(totalPrice.toFixed(2));

}
bikeRace(10, 20, 'trail');
bikeRace(21, 26, 'cross-country');
bikeRace(30, 25, 'cross-country');
bikeRace(10, 10, 'downhill');
bikeRace(3, 40, 'road')