function fishland(priceToKiloMackerel, priceToKiloSprinkle, kiloBonito, kiloSafrid, kiloShells) {

    console.log(((kiloBonito * priceToKiloMackerel) * 1.6 + (priceToKiloSprinkle * kiloSafrid) * 1.8 + (kiloShells * 7.5)).toFixed(2));

}
fishland(6.90, 4.20, 1.5, 2.5, 1);
fishland(5.55, 3.57, 4.3, 3.6, 7);
fishland(7.79, 5.35, 9.3, 0, 0);