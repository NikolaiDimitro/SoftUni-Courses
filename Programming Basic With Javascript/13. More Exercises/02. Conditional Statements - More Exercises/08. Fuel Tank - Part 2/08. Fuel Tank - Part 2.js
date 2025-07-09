function fuelTankPart2(typeOfFuel, countFuel, isHaveClubCard) {

    let totoalPrice = 0;

    if (isHaveClubCard === 'Yes') {

        if (typeOfFuel === 'Gasoline') {

            totoalPrice = countFuel * 2.04;

        } else if (typeOfFuel === 'Diesel') {

            totoalPrice = countFuel * 2.21;

        } else {

            totoalPrice = countFuel * 0.85;

        }

    } else {

        if (typeOfFuel === 'Gasoline') {

            totoalPrice = countFuel * 2.22;

        } else if (typeOfFuel === 'Diesel') {

            totoalPrice = countFuel * 2.33;

        } else {

            totoalPrice = countFuel * 0.93;

        }
    }

    if (countFuel >= 20 && countFuel <= 25) {

        totoalPrice *= 0.92

    } else if (countFuel > 25) {

        totoalPrice *= 0.9;

    }

    console.log(`${totoalPrice.toFixed(2)} lv.`);

}
fuelTankPart2('Gas', 30, 'Yes');
fuelTankPart2('Gasoline', 25, 'No');
fuelTankPart2('Diesel', 19, 'No');