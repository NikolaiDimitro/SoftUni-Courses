function club(arr) {

    let index = 1;
    let totalMoney = 0;
    let wannaProfit = Number(arr[0]);

    while (arr[index] !== 'Party!') {

        if (index >= arr.length) {

            break;

        }

        let currentDrink = arr[index];
        let lengthOfCurre3ntDrink = currentDrink.length;

        index++;

        let currentCountOfDrink = Number(arr[index]);
        let currentPrice = lengthOfCurre3ntDrink * currentCountOfDrink;

        if (currentPrice % 2 == 1) {

            currentPrice = (lengthOfCurre3ntDrink * currentCountOfDrink) * 0.75;

        }

        totalMoney += currentPrice;
        index++;

        if (arr[index] === 'Party!') {

            console.log(`We need ${(wannaProfit - totalMoney).toFixed(2)} leva more.`);

        }

        if (totalMoney >= wannaProfit) {

            console.log(`Target acquired.`);

        }
    }

    console.log(`Club income - ${totalMoney.toFixed(2)} leva.`);

}
club((["500", "Bellini", "6", "Bamboo", "7", "Party!"]));
club((["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]));