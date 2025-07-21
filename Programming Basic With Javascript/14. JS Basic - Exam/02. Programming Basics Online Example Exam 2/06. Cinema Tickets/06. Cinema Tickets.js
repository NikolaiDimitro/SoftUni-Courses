function cinemaTickets(arr) {

    let index = 0;
    let countStudentsTickets = 0;
    let countStandardTickets = 0;
    let countKidTicket = 0;
    let totalCountTickets = 0;
    let count = 0;

    while (arr[index] !== 'Finish') {

        if (index >= arr.length) {

            break;

        }

        let currentMovie = arr[index];

        index++;

        let totalSpaceInCinema = Number(arr[index]);
        index++

        while (arr[index] !== 'End') {

            if (arr[index] === 'Finish') {

                break;

            }

            count++;

            let current = arr[index];

            if (current === 'student') {

                countStudentsTickets++

            } else if (current === 'standard') {

                countStandardTickets++;

            } else {

                countKidTicket++;

            }

            if (count >= totalSpaceInCinema) {

                break;

            }

            index++

        }

        console.log(`${currentMovie} - ${((count / totalSpaceInCinema) * 100).toFixed(2)}% full.`);
        totalCountTickets += count;

        count = 0;
        index++;

    }

    console.log(`Total tickets: ${totalCountTickets}`);
    console.log(`${((countStudentsTickets / totalCountTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((countStandardTickets / totalCountTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((countKidTicket / totalCountTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets((["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]));
cinemaTickets((["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]));