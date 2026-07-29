function suppliesForSchool(countChemicals, countMarkers, litersOfDetergent, percentageReduction) {

    console.log((countChemicals * 5.80 + countMarkers * 7.20 + litersOfDetergent * 1.20) * (1 - percentageReduction / 100));

}
suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);