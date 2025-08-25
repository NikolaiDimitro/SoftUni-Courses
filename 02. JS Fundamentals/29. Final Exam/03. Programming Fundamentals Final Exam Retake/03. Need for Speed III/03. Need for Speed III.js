function needForSpeedIII(arr) {

  let countOfCars = Number(arr.shift());
  let obj = {};
  let index = countOfCars;

  for (let i = 0; i < countOfCars; i++) {

    let current = arr[i];
    let [car, mileage, fuel] = current.split('|');
    obj[car] = { mileage: Number(mileage), fuel: Number(fuel) };

  }

  while (arr[index] !== 'Stop') {

    let current = arr[index];

    if (current.includes('Drive')) {

      let [command, car, distance, fuel] = current.split(' : ');

      if (obj[car].fuel < fuel) {

        console.log(`Not enough fuel to make that ride`);

      } else {

        obj[car].mileage += Number(distance);
        obj[car].fuel -= Number(fuel);
        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

      }

      if (obj[car].mileage > 100000) {

        console.log(`Time to sell the ${car}!`);

        delete obj[car];

      }
    } else if (current.includes('Refuel')) {

      let [command, car, fuel] = current.split(' : ');

      if (obj[car].fuel + Number(fuel) > 75) {

        console.log(`${car} refueled with ${75 - obj[car].fuel} liters`);
        obj[car].fuel = 75;

      } else {

        obj[car].fuel += Number(fuel);
        console.log(`${car} refueled with ${fuel} liters`);

      }
    } else {

      let [command, car, kilometers] = current.split(' : ');

      obj[car].mileage -= Number(kilometers);

      if (obj[car].mileage >= 10000) {

        console.log(`${car} mileage decreased by ${kilometers} kilometers`);

      } else {

        obj[car].mileage = 10000;

      }
    }

    index++;

  }

  let entries = Object.entries(obj);

  for (let car of entries) {

    console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);

  }
}
needForSpeedIII(['3', 'Audi A6|38000|62', 'Mercedes CLS|11000|35', 'Volkswagen Passat CC|45678|5', 'Drive : Audi A6 : 543 : 47', 'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50', 'Revert : Mercedes CLS : 500', 'Revert : Audi A6 : 30000', 'Stop']);
needForSpeedIII(['4', 'Lamborghini Veneno|11111|74', 'Bugatti Veyron|12345|67', 'Koenigsegg CCXR|67890|12', 'Aston Martin Valkryie|99900|50', 'Drive : Koenigsegg CCXR : 382 : 82', 'Drive : Aston Martin Valkryie : 99 : 23', 'Drive : Aston Martin Valkryie : 2 : 1', 'Refuel : Lamborghini Veneno : 40', 'Revert : Bugatti Veyron : 2000', 'Stop']);