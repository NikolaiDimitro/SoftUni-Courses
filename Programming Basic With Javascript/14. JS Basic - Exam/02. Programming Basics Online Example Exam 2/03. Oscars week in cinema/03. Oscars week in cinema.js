function oscarsWeekInCinema(nameOfMovie, typeOfHall, countTickets) {

    let totalPrice = 0;

    switch (nameOfMovie) {

        case 'A Star Is Born':

            if (typeOfHall === 'normal') {

                totalPrice = countTickets * 7.5;

            } else if (typeOfHall === 'luxury') {

                totalPrice = countTickets * 10.5;

            } else if (typeOfHall === 'ultra luxury') {

                totalPrice = countTickets * 13.5;

            }

            break;

        case 'Bohemian Rhapsody':

            if (typeOfHall === 'normal') {

                totalPrice = countTickets * 7.35;

            } else if (typeOfHall === 'luxury') {

                totalPrice = countTickets * 9.45;

            } else if (typeOfHall === 'ultra luxury') {

                totalPrice = countTickets * 12.75;

            }

            break;

        case 'Green Book':

            if (typeOfHall === 'normal') {

                totalPrice = countTickets * 8.15;

            } else if (typeOfHall === 'luxury') {

                totalPrice = countTickets * 10.25;

            } else if (typeOfHall === 'ultra luxury') {

                totalPrice = countTickets * 13.25;

            }

            break;

        case 'The Favourite':

            if (typeOfHall === 'normal') {

                totalPrice = countTickets * 8.75;

            } else if (typeOfHall === 'luxury') {

                totalPrice = countTickets * 11.55;

            } else if (typeOfHall === 'ultra luxury') {

                totalPrice = countTickets * 13.95;

            }

            break;

    }

    console.log(`${nameOfMovie} -> ${totalPrice.toFixed(2)} lv.`);

}
oscarsWeekInCinema('A Star Is Born', 'luxury', 42);
oscarsWeekInCinema('Green Book', 'normal', 63);
oscarsWeekInCinema('The Favourite', 'ultra luxury', 34);