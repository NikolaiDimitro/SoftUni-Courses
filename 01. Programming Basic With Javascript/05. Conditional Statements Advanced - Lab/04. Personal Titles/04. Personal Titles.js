function personalTitles(year, gendre) {

    if (gendre === 'm' && year >= 16) {

        console.log('Mr.');

    } else if (gendre === 'm' && year < 16) {

        console.log('Master');

    } else if (gendre === 'f' && year >= 16) {

        console.log('Ms.');

    } else {

        console.log('Miss');

    }
}
personalTitles(12, "f");
personalTitles(17, "m");
personalTitles(25, "f");
personalTitles(13.5, "m");