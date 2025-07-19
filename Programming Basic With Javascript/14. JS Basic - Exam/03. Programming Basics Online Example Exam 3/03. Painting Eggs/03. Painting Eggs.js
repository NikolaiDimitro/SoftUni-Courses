function paitingEggs(sizeOfEggs, colorOfEggs, countBatches) {

    let totalPrice = 0;

    switch (colorOfEggs) {

        case 'Red':

            if (sizeOfEggs === 'Large') {

                totalPrice = countBatches * 16;

            } else if (sizeOfEggs === 'Medium') {

                totalPrice = countBatches * 13;

            } else {

                totalPrice = countBatches * 9;

            }

            break;

        case 'Green':

            if (sizeOfEggs === 'Large') {

                totalPrice = countBatches * 12;

            } else if (sizeOfEggs === 'Medium') {

                totalPrice = countBatches * 9;

            } else {

                totalPrice = countBatches * 8;

            }

            break;

        case 'Yellow':

            if (sizeOfEggs === 'Large') {

                totalPrice = countBatches * 9;

            } else if (sizeOfEggs === 'Medium') {

                totalPrice = countBatches * 7;

            } else {

                totalPrice = countBatches * 5;

            }

            break;

    }

    totalPrice *= 0.65;
    console.log(`${totalPrice.toFixed(2)} leva.`);

}
paitingEggs('Large', 'Red', 7);
paitingEggs('Medium', 'Green', 5);
paitingEggs('Small', 'Yellow', 3);