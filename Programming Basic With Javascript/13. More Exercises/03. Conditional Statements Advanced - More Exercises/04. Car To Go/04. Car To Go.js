function carToGo(budget, season) {

    let classCar = '';
    let typeCar = '';
    let price = 0;

    switch (season) {

        case 'Summer':

            if (budget <= 100) {

                classCar = 'Economy class';
                typeCar = 'Cabrio';
                price = budget * 0.35;

            } else if (budget < 500) {

                classCar = 'Compact class';
                typeCar = 'Cabrio';
                price = budget * 0.45

            } else {

                classCar = 'Luxury class';
                typeCar = 'Jeep';
                price = budget * 0.9;

            }

            break;

        case 'Winter':

            if (budget <= 100) {

                classCar = 'Economy class';
                typeCar = 'Jeep';
                price = budget * 0.65;

            } else if (budget < 500) {

                classCar = 'Compact class';
                typeCar = 'Jeep';
                price = budget * 0.80;

            } else {

                classCar = 'Luxury class';
                typeCar = 'Jeep';
                price = budget * 0.9;

            }

            break;

    }

    console.log(classCar);
    console.log(`${typeCar} - ${price.toFixed(2)}`);

}
carToGo(450, 'Summer');
carToGo(450, 'Winter');
carToGo(99.99, 'Summer');
carToGo(70.50, 'Winter');
carToGo(1010, 'Summer');
carToGo(1010, 'Winter');