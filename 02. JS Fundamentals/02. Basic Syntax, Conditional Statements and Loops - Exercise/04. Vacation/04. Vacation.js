function vacation(groupOfPeople, typeOfGroup, dayOfTheWeek) {

    let totallPrice = 0;

    switch (dayOfTheWeek) {

        case 'Friday':

            if (typeOfGroup === 'Students') {

                totallPrice = groupOfPeople * 8.45;

            } else if (typeOfGroup === 'Business') {

                totallPrice = groupOfPeople * 10.9;

            } else {

                totallPrice = groupOfPeople * 15;

            }

            break;

        case 'Saturday':

            if (typeOfGroup === 'Students') {

                totallPrice = groupOfPeople * 9.8;

            } else if (typeOfGroup === 'Business') {

                totallPrice = groupOfPeople * 15.6;

            } else {

                totallPrice = groupOfPeople * 20;

            }

            break;

        case 'Sunday':

            if (typeOfGroup === 'Students') {

                totallPrice = groupOfPeople * 10.46;

            } else if (typeOfGroup === 'Business') {

                totallPrice = groupOfPeople * 16;

            } else {

                totallPrice = groupOfPeople * 22.5;

            }

            break;

    }

    if (typeOfGroup === 'Students' && groupOfPeople >= 30) {

        totallPrice *= 0.85;

    } else if (typeOfGroup === 'Business' && groupOfPeople >= 100) {

        totallPrice /= groupOfPeople;
        groupOfPeople -= 10;
        totallPrice *= groupOfPeople;

    } else if (typeOfGroup === 'Regular' && (groupOfPeople >= 10 && groupOfPeople <= 20)) {

        totallPrice *= 0.95;

    }

    console.log(`Total price: ${totallPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");