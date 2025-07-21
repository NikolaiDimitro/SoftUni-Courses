function cinemaVoucher(arr) {

    let index = 1;
    let priceOfVoucher = Number(arr[0]);
    let sumOfPrice = 0;
    let countTickets = 0;
    let countOtherProducts = 0;

    while (arr[index] !== 'End') {

        let current = arr[index];
        let lengthOtNameOfMovie = current.length;
        let firstLetter = current[0].charCodeAt();
        let secondLetter = current[1].charCodeAt();

        if (lengthOtNameOfMovie > 8) {

            if ((priceOfVoucher - sumOfPrice) < (firstLetter + secondLetter)) {

                console.log(countTickets);
                console.log(countOtherProducts);
                return;

            } else {

                sumOfPrice += firstLetter + secondLetter;
                countTickets++;

            }

        } else {

            if ((priceOfVoucher - sumOfPrice) < firstLetter) {

                console.log(countTickets);
                console.log(countOtherProducts);
                return;

            } else {

                sumOfPrice += firstLetter;
                countOtherProducts++;

            }
        }

        if (sumOfPrice >= priceOfVoucher) {

        }

        index++;

    }

    console.log(countTickets);
    console.log(countOtherProducts);

}
cinemaVoucher((["300", "Captain Marvel", "popcorn", "Pepsi"]));
cinemaVoucher((["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]));