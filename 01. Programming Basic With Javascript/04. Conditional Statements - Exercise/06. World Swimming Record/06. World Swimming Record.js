function worldSwimmingRecord(second, metres, for1Metre) {

    let time = metres * for1Metre;
    let delay = Math.floor(metres / 15) * 12.5;
    let totalTime = time + delay;

    if (totalTime < second) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);

    } else {

        console.log(`No, he failed! He was ${(totalTime - second).toFixed(2)} seconds slower.`);

    }
}
worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);