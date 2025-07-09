function transportPrice(kilometres, partOfAroundTheClock) {

    let price = 0;

    if (kilometres >= 20 && kilometres < 100) {

        price = kilometres * 0.09;

    } else if (kilometres >= 100) {

        price = kilometres * 0.06;

    } else {

        if (partOfAroundTheClock === 'day') {

            price = 0.7 + (0.79 * kilometres);

        } else {

            price = 0.7 + (0.9 * kilometres);

        }
    }

    console.log(price.toFixed(2));

}
transportPrice(5, 'day');
transportPrice(7, 'night');
transportPrice(25, 'day');
transportPrice(180, 'night');