function waliking(arr) {

    let index = 0;
    let total = 0;

    while (index < arr.length) {

        if (arr[index] === 'Going home') {

            index++;
            continue;

        }

        total += Number(arr[index]);
        index++;

    }

    if (total >= 10000) {

        console.log(`Goal reached! Good job!`);
        console.log(`${total - 10000} steps over the goal!`);

    } else {

        console.log(`${10000 - total} more steps to reach goal.`);

    }
}
waliking(["1000", "1500", "2000", "6500"]);
waliking(["1500", "300", "2500", "3000", "Going home", "200"]);
waliking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
waliking(["125", "250", "4000", "30", "2678", "4682"]);