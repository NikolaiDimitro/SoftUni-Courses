function oscarsCeremony(rentOfHall) {

    let priceOfStatuettes = rentOfHall * 0.7;
    let priceOfCatering = priceOfStatuettes * 0.85;
    let priceOfVoicing = priceOfCatering * 1 / 2;
    let total = rentOfHall + priceOfStatuettes + priceOfCatering + priceOfVoicing;

    console.log(total.toFixed(2));

}
oscarsCeremony(3500);
oscarsCeremony(5555);