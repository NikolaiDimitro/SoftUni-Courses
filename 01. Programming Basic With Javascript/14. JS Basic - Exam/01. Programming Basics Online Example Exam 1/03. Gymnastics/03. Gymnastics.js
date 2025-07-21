function gymnastics(country, appliance) {

    let difficulty = 0;
    let performance = 0;
    let total = 0;

    switch (country) {

        case 'Russia':

            if (appliance === 'ribbon') {

                difficulty = 9.1;
                performance = 9.4;
                total = difficulty + performance;

            } else if (appliance === 'hoop') {

                difficulty = 9.3;
                performance = 9.8;
                total = difficulty + performance;

            } else {

                difficulty = 9.6;
                performance = 9;
                total = difficulty + performance;

            }

            break;

        case 'Bulgaria':

            if (appliance === 'ribbon') {

                difficulty = 9.6;
                performance = 9.4;
                total = difficulty + performance;

            } else if (appliance === 'hoop') {

                difficulty = 9.55;
                performance = 9.75;
                total = difficulty + performance;

            } else {

                difficulty = 9.5;
                performance = 9.4;
                total = difficulty + performance;

            }

            break;

        case 'Italy':

            if (appliance === 'ribbon') {

                difficulty = 9.2;
                performance = 9.5;
                total = difficulty + performance;

            } else if (appliance === 'hoop') {

                difficulty = 9.450;
                performance = 9.350;
                total = difficulty + performance;

            } else {

                difficulty = 9.7;
                performance = 9.15;
                total = difficulty + performance;

            }

            break;

    }

    console.log(`The team of ${country} get ${total.toFixed(3)} on ${appliance}.`);
    console.log(`${(100 - (total / 20) * 100).toFixed(2)}%`);

}
gymnastics('Bulgaria', 'ribbon');
gymnastics('Russia', 'rope');
gymnastics('Italy', 'hoop');