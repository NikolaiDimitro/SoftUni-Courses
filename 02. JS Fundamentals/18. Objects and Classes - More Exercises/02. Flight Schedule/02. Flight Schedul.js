function flightSchedul(arr) {

    let flights = arr.shift();
    let changes = arr.shift();
    let statusOfFlights = arr.shift()[0];
    let arrOfChanges = [];
    let arrOfFlights = [];
    let allObj = [];

    if (statusOfFlights === 'Ready to fly') {

        for (let i of changes) {

            i = i.split(' ');
            arrOfChanges.push(i[0]);

        }

        for (let i = 0; i < flights.length; i++) {

            let current = flights[i].split(' ');
            let city = '';
            let code = '';

            for (let j = 1; j < current.length; j++) {

                let nameOfCity = current[j];
                code = current[0];
                city += nameOfCity + ' ';

            }

            city = city.trim();

            if (!arrOfChanges.includes(code)) {

                arrOfFlights.push(city);

            }
        }

        for (let flight of arrOfFlights) {

            let obj = {

                Destination: flight,
                Status: 'Ready to fly'

            };

            allObj.push(obj);

        }

        for (let flight of allObj) {

            console.log(flight);

        }

    } else {

        for (let i of changes) {

            i = i.split(' ');
            arrOfChanges.push(i[0]);

        }

        for (let flight of flights) {

            flight = flight.split(' ');

            if (arrOfChanges.includes(flight[0])) {

                arrOfFlights.push(flight[1]);

            }
        }

        for (let flight of arrOfFlights) {

            let obj = { Destination: flight, Status: statusOfFlights };
            allObj.push(obj);

        }

        for (let flight of allObj) {

            console.log(flight);

        }
    }
}
flightSchedul([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']]);
flightSchedul([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']]);