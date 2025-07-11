function schoolCamp(season, typeOfGroupe, countStudents, countOvernightStays) {

    let price = 0;
    let typeSport = '';

    switch (season) {

        case 'Winter':

            if (typeOfGroupe === 'boys' || typeOfGroupe === 'girls') {

                price = countStudents * countOvernightStays * 9.6;

            } else {

                price = countStudents * countOvernightStays * 10;;

            }

            if (typeOfGroupe === 'boys') {

                typeSport = 'Judo';

            } else if (typeOfGroupe === 'girls') {

                typeSport = 'Gymnastics';

            } else if (typeOfGroupe === 'mixed') {

                typeSport = 'Ski';

            }

            break;

        case 'Spring':

            if (typeOfGroupe === 'boys' || typeOfGroupe === 'girls') {

                price = countStudents * countOvernightStays * 7.2;

            } else {

                price = countStudents * countOvernightStays * 9.5;

            }

            if (typeOfGroupe === 'boys') {

                typeSport = 'Tennis';

            } else if (typeOfGroupe === 'girls') {

                typeSport = 'Athletics';

            } else if (typeOfGroupe === 'mixed') {

                typeSport = 'Cycling';

            }

            break;

        case 'Summer':

            if (typeOfGroupe === 'boys' || typeOfGroupe === 'girls') {

                price = countStudents * countOvernightStays * 15;

            } else {

                price = countStudents * countOvernightStays * 20;;

            }

            if (typeOfGroupe === 'boys') {

                typeSport = 'Football';

            } else if (typeOfGroupe === 'girls') {

                typeSport = 'Volleyball';

            } else if (typeOfGroupe === 'mixed') {

                typeSport = 'Swimming';

            }

            break;

    }

    if (countStudents >= 10 && countStudents < 20) {

        price *= 0.95;

    } else if (countStudents >= 20 && countStudents < 50) {

        price *= 0.85;

    } else if (countStudents >= 50) {

        price *= 0.50;

    }

    console.log(`${typeSport} ${price.toFixed(2)} lv.`);

}
schoolCamp('Spring', 'girls', 20, 7);
schoolCamp('Winter', 'mixed', 9, 15);
schoolCamp('Summer', 'boys', 60, 7);
schoolCamp('Spring', 'mixed', 17, 14);