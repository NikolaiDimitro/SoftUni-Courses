function skipTrip(dayCount, typeOfRoom, grade) {

    let price = 0;

    switch (typeOfRoom) {

        case 'room for one person':

            price = (dayCount - 1) * 18;

            break;

        case 'apartment':

            price = (dayCount - 1) * 25;

            if ((dayCount - 1) < 10) {

                price *= 0.7;

            } else if ((dayCount - 1) >= 10 && (dayCount - 1) <= 15) {

                price *= 0.65;

            } else if ((dayCount - 1) > 15) {

                price *= 0.5;

            }

            break;

        case 'president apartment':

            price = (dayCount - 1) * 35;

            if ((dayCount - 1) < 10) {

                price *= 0.9;

            } else if ((dayCount - 1) >= 10 && (dayCount - 1) <= 15) {

                price *= 0.85;

            } else if ((dayCount - 1) > 15) {

                price *= 0.8;

            }

            break;

    }

    if (grade === 'positive') {

        price *= 1.25;

    } else {

        price *= 0.9;

    }

    console.log(price.toFixed(2));

}
skipTrip(14, "apartment", "positive");
skipTrip(30, "president apartment", "negative");