function travelAgency(nameOfCity, typeOfPackage, isVIPDiscount, dayOfStay) {

    let totalPrice = 0;

    if (dayOfStay > 7) {

        dayOfStay--;

    }

    if (dayOfStay < 1) {

        console.log('Days must be positive number!');

        return;

    }

    switch (nameOfCity) {

        case 'Bansko':

        case 'Borovets':

            if (typeOfPackage === 'withEquipment') {

                if (isVIPDiscount === 'yes') {

                    totalPrice = (dayOfStay * 100) * 0.9;

                } else {

                    totalPrice = dayOfStay * 100;

                }

            } else if (typeOfPackage === 'noEquipment') {

                if (isVIPDiscount === 'yes') {

                    totalPrice = (dayOfStay * 80) * 0.95;

                } else {

                    totalPrice = dayOfStay * 80;

                }

            } else {

                console.log('Invalid input!');

                return;

            }

            break;

        case 'Varna':
        case 'Burgas':

            if (typeOfPackage === 'withBreakfast') {

                if (isVIPDiscount === 'yes') {

                    totalPrice = (dayOfStay * 130) * 0.88;

                } else {

                    totalPrice = dayOfStay * 130;

                }

            } else if (typeOfPackage === 'noBreakfast') {

                if (isVIPDiscount === 'yes') {

                    totalPrice = (dayOfStay * 100) * 0.93;

                } else {

                    totalPrice = dayOfStay * 100;;

                }

            } else {

                console.log('Invalid input!');
                return;

            }

            break;

        default:

            console.log('Invalid input!');
            return;

    }

    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);

}
travelAgency('Borovets', 'noEquipment', 'yes', 6);
travelAgency('Bansko', 'withEquipment', 'no', 2);
travelAgency('Varna', 'withBreakfast', 'yes', 5);
travelAgency('Burgas', 'noBreakfast', 'no', 4);
travelAgency('Varna', 'withBreakfast', 'no', 0);
travelAgency('Gabrovo', 'noBreakfast', 'no', 3);