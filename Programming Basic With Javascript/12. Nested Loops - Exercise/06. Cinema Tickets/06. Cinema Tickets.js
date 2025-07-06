function cinemaTickets(arr) {
    let index = 0;

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (arr[index] !== "Finish") {

        let movieName = arr[index++];
        let freeSeats = Number(arr[index++]);

        let ticketsForCurrentMovie = 0;

        while (arr[index] !== "End" && arr[index] !== "Finish") {

            let ticketType = arr[index++];

            if (ticketType === "student") {

                studentTickets++;

            } else if (ticketType === "standard") {

                standardTickets++;

            } else if (ticketType === "kid") {

                kidTickets++;

            }

            ticketsForCurrentMovie++;

            if (ticketsForCurrentMovie >= freeSeats) {

                break;

            }
        }

        console.log(`${movieName} - ${((ticketsForCurrentMovie / freeSeats) * 100).toFixed(2)}% full.`);

        totalTickets += ticketsForCurrentMovie;

        if (arr[index] === "End") {

            index++;

        }
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets((["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]));
cinemaTickets((["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]));