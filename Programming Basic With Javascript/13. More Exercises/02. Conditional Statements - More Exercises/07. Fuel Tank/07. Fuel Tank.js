function fuelTank(typeFuel, countFuel) {

    if (countFuel >= 25 && typeFuel === 'Diesel') {

        console.log(`You have enough diesel.`);

    } else if (countFuel < 25 && typeFuel === 'Diesel') {

        console.log(`Fill your tank with diesel!`);

    }

    if (countFuel >= 25 && typeFuel === 'Gasoline') {

        console.log(`You have enough gasoline.`);

    } else if (countFuel < 25 && typeFuel === 'Gasoline') {

        console.log(`Fill your tank with gasoline!`);

    }

    if (countFuel >= 25 && typeFuel === 'Gas') {

        console.log(`You have enough gas.`);

    } else if (countFuel < 25 && typeFuel === 'Gas') {

        console.log(`Fill your tank with gas!`);

    }
    if (typeFuel !== 'Diesel' && typeFuel !== 'Gasoline' && typeFuel !== 'Gas') {

        console.log('Invalid fuel!');

    }
}
fuelTank('Diesel', 10);
fuelTank('Gasoline', 40);
fuelTank('Gas', 25);
fuelTank('Kerosene', 200);