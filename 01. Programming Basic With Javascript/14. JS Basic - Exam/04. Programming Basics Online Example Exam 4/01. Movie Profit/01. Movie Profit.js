function movieProfit(nameOfMovie, countDays, countTickets, priceToTicket, percentForCino) {

    console.log(`The profit from the movie ${nameOfMovie} is ${((countDays * countTickets * priceToTicket) - ((countDays * countTickets * priceToTicket) * (percentForCino / 100))).toFixed(2)} lv.`);

}
movieProfit('The Programmer', 20, 500, 7.50, 7);
movieProfit('Python Basics', 40, 34785, 10.45, 14,);
movieProfit('The Jungle', 22, 20500, 9.37, 30);