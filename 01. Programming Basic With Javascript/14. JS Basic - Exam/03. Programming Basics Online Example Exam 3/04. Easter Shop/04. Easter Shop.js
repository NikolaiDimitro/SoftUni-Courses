function easterShop(arr) {

    let index = 1;
    let totalEggs = 0;
    let startCountEggs = Number(arr[0]);

    while (arr[index] !== 'Close') {

        let current = arr[index];

        index++;

        let countEgg = Number(arr[index]);

        if (current === 'Buy') {

            if (startCountEggs >= countEgg) {

                startCountEggs -= countEgg;
                totalEggs += countEgg;

            } else {

                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${startCountEggs}.`);
                return;

            }

        } else {

            startCountEggs += countEgg;

        }

        index++;

        if (arr[index] === 'Close') {

            console.log(`Store is closed!`);
            console.log(`${totalEggs} eggs sold.`);

        }
    }
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);