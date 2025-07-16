function weddingSeats(lastSector, countRowsInFirstSector, countPlaceInOddRow) {

    let start = 'A'.charCodeAt();
    let end = lastSector.charCodeAt();
    let count = 0;
    let countRows = countRowsInFirstSector;
    let countPlace = 0;

    for (let i = start; i <= end; i++) {

        countRows++;
        let nameOfSector = String.fromCharCode(i);

        for (let j = 1; j < countRows; j++) {

            if (j % 2 === 1) {

                countPlace = countPlaceInOddRow;

            } else {

                countPlace = countPlaceInOddRow + 2;

            }

            for (let k = 1; k <= countPlace; k++) {

                count++;
                let nameOfPlace = String.fromCharCode(96 + k)
                console.log(`${nameOfSector}${j}${nameOfPlace}`);

            }
        }
    }

    console.log(count);

}
weddingSeats('B', 3, 2);
weddingSeats('C', 4, 2);