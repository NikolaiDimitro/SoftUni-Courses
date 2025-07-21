function dishwasher(arr) {

    let index = 0;
    let totalPreparationUsed = 0;
    let plates = 0;
    let pots = 0
    let countPreparationInMls = Number(arr[0]) * 750;

    index++;

    while (arr[index] !== 'End') {

        let countWashingDishes = Number(arr[index]);

        if (index % 3 === 0) {

            pots += countWashingDishes;
            totalPreparationUsed += countWashingDishes * 15;

        } else {

            plates += countWashingDishes;
            totalPreparationUsed += countWashingDishes * 5;

        }

        index++;

        if (countPreparationInMls < totalPreparationUsed) {

            break;

        }
    }

    if (countPreparationInMls >= totalPreparationUsed) {

        console.log('Detergent was enough!');
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${countPreparationInMls - totalPreparationUsed} ml.`);

    } else {

        console.log(`Not enough detergent, ${totalPreparationUsed - countPreparationInMls} ml. more necessary!`);

    }
}
dishwasher((["2 ", "53", "65", "55", "End"]));
dishwasher((["1", "10", "15", "10", "12", "13", "30"]));