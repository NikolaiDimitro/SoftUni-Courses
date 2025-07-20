function series(arr) {

    let budget = Number(arr[0]);
    let totalPrice = 0;

    for (let i = 2; i < arr.length; i += 2) {

        let current = arr[i];
        let currentPrice = Number(arr[i + 1]);

        if (current === 'Thrones') {

            totalPrice += currentPrice * 0.5;

        } else if (current === 'Lucifer') {

            totalPrice += currentPrice * 0.6;

        } else if (current === 'Protector') {

            totalPrice += currentPrice * 0.7;

        } else if (current === 'TotalDrama') {

            totalPrice += currentPrice * 0.8;

        } else if (current === 'Area') {

            totalPrice += currentPrice * 0.9;

        } else {

            totalPrice += currentPrice;

        }
    }

    if (budget >= totalPrice) {

        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);

    } else {

        console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);

    }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series((["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"]));