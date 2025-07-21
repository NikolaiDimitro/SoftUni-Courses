function happyCatParking(countDays, countHoursForEveryDay) {

    let moneyForEachDay = 0;
    let sum = 0;

    for (let i = 1; i <= countDays; i++) {

        for (let j = 1; j <= countHoursForEveryDay; j++) {

            if (i % 2 === 0 && j % 2 === 1) {

                moneyForEachDay += 2.5;

            } else if (i % 2 === 1 && j % 2 === 0) {

                moneyForEachDay += 1.25;

            } else {

                moneyForEachDay += 1;

            }
        }

        console.log(`Day: ${i} - ${moneyForEachDay.toFixed(2)} leva`);
        sum += moneyForEachDay;
        moneyForEachDay = 0;

    }

    console.log(`Total: ${sum.toFixed(2)} leva`);

}
happyCatParking(2, 5);
happyCatParking(5, 2);