function bitcoinMining(arr) {

    let sum = 0;
    let countBitcoin = 0;
    let countDays = 0;
    let dayOfFirstBitcoin = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        countDays++;

        if (countDays % 3 === 0) {

            current *= 0.7;

        }

        sum += current * 67.51;

        if (sum >= 11949.16) {

            let countBitcoinWhichCanBuy = Math.floor(sum / 11949.16);
            sum -= countBitcoinWhichCanBuy * 11949.16;
            countBitcoin += countBitcoinWhichCanBuy;

            if (countBitcoin >= 1) {

                count++;

                if (count === 1) {

                    dayOfFirstBitcoin = countDays;

                }
            }
        }
    }

    console.log(`Bought bitcoins: ${countBitcoin}`);

    if (countBitcoin >= 1) {

        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);

    }

    console.log(`Left money: ${sum.toFixed(2)} lv.`);

}
bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);