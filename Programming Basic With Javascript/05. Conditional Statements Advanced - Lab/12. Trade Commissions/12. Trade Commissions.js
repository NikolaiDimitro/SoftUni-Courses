function tradeCommissions(city, price) {

    let commissions = 0;

    switch (city) {

        case 'Sofia':

            if (price >= 0 && price <= 500) {

                commissions = price * 0.05;
                console.log(commissions.toFixed(2));

            } else if (price > 500 && price <= 1000) {

                commissions = price * 0.07;
                console.log(commissions.toFixed(2));

            } else if (price > 1000 && price <= 10000) {

                commissions = price * 0.08;
                console.log(commissions.toFixed(2));

            } else if (price > 10000) {

                commissions = price * 0.12;
                console.log(commissions.toFixed(2));

            } else {

                console.log('error');


            }

            break;

        case 'Varna':

            if (price >= 0 && price <= 500) {

                commissions = price * 0.045;
                console.log(commissions.toFixed(2));

            } else if (price > 500 && price <= 1000) {

                commissions = price * 0.075;
                console.log(commissions.toFixed(2));

            } else if (price > 1000 && price <= 10000) {

                commissions = price * 0.1;
                console.log(commissions.toFixed(2));

            } else if (price > 10000) {

                commissions = price * 0.13;
                console.log(commissions.toFixed(2));

            } else {

                console.log('error');

            }

            break;

        case 'Plovdiv':

            if (price >= 0 && price <= 500) {

                commissions = price * 0.055;
                console.log(commissions.toFixed(2));

            } else if (price > 500 && price <= 1000) {

                commissions = price * 0.08;
                console.log(commissions.toFixed(2));

            } else if (price > 1000 && price <= 10000) {

                commissions = price * 0.12;
                console.log(commissions.toFixed(2));

            } else if (price > 10000) {

                commissions = price * 0.145;
                console.log(commissions.toFixed(2));

            } else {

                console.log('error');

            }

            break;

        default:

            console.log('error');

    }
}
tradeCommissions("Sofia", 1500);
tradeCommissions("Plovdiv", 499.99);
tradeCommissions("Varna", 3874.50);
tradeCommissions("Kaspichan", -50);
tradeCommissions("Plovdiv", -20);