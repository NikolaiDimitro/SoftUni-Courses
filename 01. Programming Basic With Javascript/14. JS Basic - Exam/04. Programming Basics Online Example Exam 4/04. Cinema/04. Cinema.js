function cinema(arr) {

    let index = 1;
    let placesInSalon = Number(arr[0]);
    let totalFilledPlace = 0;
    let totalMoney = 0

    while (arr[index] !== 'Movie time!') {

        let current = Number(arr[index]);

        if (totalFilledPlace <= placesInSalon) {

            if ((placesInSalon - totalFilledPlace) >= current) {

                totalFilledPlace += current;

                if (current % 3 === 0) {

                    totalMoney += (current * 5) - 5;

                } else {

                    totalMoney += current * 5;

                }

            } else {

                console.log(`The cinema is full.`);

                break;

            }
        }

        index++;

        if (arr[index] === 'Movie time!') {

            console.log(`There are ${placesInSalon - totalFilledPlace} seats left in the cinema.`);

        }
    }

    console.log(`Cinema income - ${totalMoney} lv.`);

}
cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
cinema(["50", "15", "10", "10", "15", "5"]);
cinema(["100", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "Movie time!"]);