function townInfo(town, population, area) {

    if (town.length >= 3 && population >= 0 && area >= 0) {

        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);

    }

    if (town.length < 3) {

        console.log(`Town name must be at least 3 characters!`);

    }

    if (population < 0) {

        console.log(`Population must be a positive number!`);

    }

    if (area < 0) {

        console.log(`Area must be a positive number!`);

    }
}
townInfo('Sofia', 1286383, 492);
townInfo('LA', 1481353, 512);
townInfo('Plovdiv', -45000, 100);
townInfo('Ka', 3600, -50);