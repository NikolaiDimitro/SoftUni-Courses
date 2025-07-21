function worldSnookerChampionship(stageOfChampionship, typeOfTicket, countTickets, photoWithTrophy) {

    let totalPrice = 0;

    switch (stageOfChampionship) {

        case 'Quarter final':

            if (typeOfTicket === 'Standard') {

                totalPrice = countTickets * 55.5;

            } else if (typeOfTicket === 'Premium') {

                totalPrice = countTickets * 105.2;

            } else {

                totalPrice = countTickets * 118.9;

            }

            break;

        case 'Semi final':

            if (typeOfTicket === 'Standard') {

                totalPrice = countTickets * 75.88;

            } else if (typeOfTicket === 'Premium') {

                totalPrice = countTickets * 125.22;

            } else {

                totalPrice = countTickets * 300.4;

            }

            break;

        case 'Final':

            if (typeOfTicket === 'Standard') {

                totalPrice = countTickets * 110.1;

            } else if (typeOfTicket === 'Premium') {

                totalPrice = countTickets * 160.66;

            } else {

                totalPrice = countTickets * 400;

            }

            break;

    }

    if (totalPrice > 4000) {

        totalPrice *= 0.75;

        if (photoWithTrophy === 'Y') {

            totalPrice -= countTickets * 40;

        }

    } else if (totalPrice > 2500) {

        totalPrice *= 0.9;

    }

    if (photoWithTrophy === 'Y') {

        totalPrice += countTickets * 40;

    }

    console.log(totalPrice.toFixed(2));

}
worldSnookerChampionship('Final', 'Premium', 25, 'Y');
worldSnookerChampionship('Semi final', 'VIP', 9, 'Y');
worldSnookerChampionship('Quarter final', 'Standard', 11, 'N');