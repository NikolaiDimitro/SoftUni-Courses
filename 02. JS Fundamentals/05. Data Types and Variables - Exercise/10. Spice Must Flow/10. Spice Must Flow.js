function spiceMustFlow(countFistDay) {

    let sum = 0;
    let countDays = 0;

    while (countFistDay >= 100) {

        countDays++;
        sum += countFistDay;

        if (sum >= 26) {

            sum -= 26;

        }

        countFistDay -= 10;

    }

    if (sum >= 26) {

        sum -= 26;

    }

    console.log(countDays);
    console.log(sum);

}
spiceMustFlow(111);
spiceMustFlow(450);