function easterParty(countGuests, priceEnvelope, budget) {

    budget *= 0.9;
    let totalEnvelope = countGuests * priceEnvelope;

    if (countGuests >= 10 && countGuests <= 15) {

        totalEnvelope *= 0.85;

    } else if (countGuests >= 10 && countGuests <= 20) {

        totalEnvelope *= 0.8;

    } else if (countGuests > 20) {

        totalEnvelope *= 0.75;

    }

    if (budget > totalEnvelope) {

        console.log(`It is party time! ${(budget - totalEnvelope).toFixed(2)} leva left.`);

    } else {

        console.log(`No party! ${(totalEnvelope - budget).toFixed(2)} leva needed.`);

    }
}
easterParty(18, 30, 450);
easterParty(8, 25, 340);
easterParty(24, 35, 550);