function suppliesForSchool(countPencils, countMarkers, litres, percentDiscount) {

    console.log((countPencils * 5.8 + countMarkers * 7.2 + litres * 1.2) * (1 - percentDiscount / 100));

}
suppliesForSchool(2, 3, 4, 25);
suppliesForSchool(4, 2, 5, 13);