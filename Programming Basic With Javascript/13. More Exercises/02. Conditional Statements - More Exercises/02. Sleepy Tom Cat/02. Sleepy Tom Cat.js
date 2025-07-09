function slepyTomCat(holydays) {

    let total = holydays * 127 + (365 - holydays) * 63;

    if (total < 30000) {

        console.log('Tom sleeps well');
        console.log(`${Math.floor((30000 - total) / 60)} hours and ${(30000 - total) % 60} minutes less for play`);

    } else {

        console.log('Tom will run away');
        console.log(`${Math.floor((total - 30000) / 60)} hours and ${(total - 30000) % 60} minutes more for play`);

    }
}
slepyTomCat(20);
slepyTomCat(113);