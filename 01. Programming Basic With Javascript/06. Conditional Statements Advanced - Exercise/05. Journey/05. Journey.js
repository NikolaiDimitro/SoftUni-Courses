function journey(budget, season) {

    let destination = '';
    let expenses = 0;
    let place = '';

    switch (season) {

        case 'summer':

            if (budget <= 100) {

                destination = 'Bulgaria';
                expenses = budget * 0.3;
                place = 'Camp';

            } else if (budget <= 1000) {

                destination = 'Balkans';
                expenses = budget * 0.4;
                place = 'Camp';

            } else {

                destination = 'Europe';
                expenses = budget * 0.9;
                place = 'Hotel';

            }

            break;

        case 'winter':

            if (budget <= 100) {

                destination = 'Bulgaria';
                expenses = budget * 0.7;

            } else if (budget <= 1000) {

                destination = 'Balkans';
                expenses = budget * 0.8;

            } else {

                destination = 'Europe';
                expenses = budget * 0.9;

            }

            place = 'Hotel';
            break;

    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${expenses.toFixed(2)}`);

}
journey(50, "summer");
journey(75, "winter");
journey(312, "summer");
journey(678.53, "winter");
journey(1500, "summer");