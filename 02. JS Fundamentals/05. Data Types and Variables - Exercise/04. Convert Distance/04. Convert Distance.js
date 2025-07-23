function convertDistance(n) {

    let oneKilometre = n / 1000;
    let oneMile = oneKilometre * 0.621371;

    console.log(`${n} meters is equal to ${oneKilometre.toFixed(3)} kilometers.`);
    console.log(`${oneKilometre.toFixed(3)} kilometers is equal to ${oneMile.toFixed(2)} miles.`);

}
convertDistance(1852);
convertDistance(798);