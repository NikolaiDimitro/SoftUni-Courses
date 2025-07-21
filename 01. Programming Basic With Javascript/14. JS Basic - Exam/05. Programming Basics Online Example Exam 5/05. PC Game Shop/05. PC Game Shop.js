function pcGameShop(arr) {

    let countSellGame = Number(arr[0]);
    let countHearthstone = 0;
    let countFortnite = 0;
    let countOverwatch = 0;
    let countOthers = 0;

    for (let i = 1; i <= countSellGame; i++) {

        let current = arr[i];

        if (current === 'Hearthstone') {

            countHearthstone++;

        } else if (current === 'Fornite') {

            countFortnite++;

        } else if (current === 'Overwatch') {

            countOverwatch++;

        } else {

            countOthers++;

        }
    }

    console.log(`Hearthstone - ${((countHearthstone / countSellGame) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((countFortnite / countSellGame) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((countOverwatch / countSellGame) * 100).toFixed(2)}%`);
    console.log(`Others - ${((countOthers / countSellGame) * 100).toFixed(2)}%`);

}
pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
pcGameShop(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);