function flowers(countPurchasedChrysanthemums, countPurchasedRoses, countPurchasedTulips, seasons, holyday) {

    let totalPrice = 0;

    switch (seasons) {

        case 'Spring':
        case 'Summer':

            totalPrice = countPurchasedChrysanthemums * 2 + countPurchasedRoses * 4.1 + countPurchasedTulips * 2.5;
            break;

        case 'Autumn':
        case 'Winter':

            totalPrice = countPurchasedChrysanthemums * 3.75 + countPurchasedRoses * 4.5 + countPurchasedTulips * 4.15;

    }

    if (holyday === 'Y') {

        totalPrice *= 1.15;

    }

    if (countPurchasedTulips > 7 && seasons === 'Spring') {

        totalPrice *= 0.95;

    } else if (countPurchasedRoses >= 10 && seasons === 'Winter') {

        totalPrice *= 0.9;

    }

    if ((countPurchasedChrysanthemums + countPurchasedRoses + countPurchasedTulips) > 20) {

        totalPrice *= 0.8;

    }

    totalPrice += 2
    console.log(totalPrice.toFixed(2));

}
flowers(2, 4, 8, 'Spring', 'Y');
flowers(3, 10, 9, 'Winter', 'N');
flowers(10, 10, 10, 'Autumn', 'N');