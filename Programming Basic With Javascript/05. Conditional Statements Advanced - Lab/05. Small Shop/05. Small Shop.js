function smallShop(product, city, count) {

    let price = 0;

    switch (city) {

        case 'Sofia':

            if (product === 'coffee') {

                price = count * 0.5;
                console.log(price);


            } else if (product === 'water') {

                price = 0.8 * count;
                console.log(price);

            } else if (product === 'beer') {

                price = 1.2 * count;
                console.log(price);

            } else if (product === 'sweets') {

                price = 1.45 * count;
                console.log(price);

            } else {

                price = 1.6 * count;
                console.log(price);

            }
            break;

        case 'Plovdiv':

            if (product === 'coffee') {

                price = count * 0.4;
                console.log(price);

            } else if (product === 'water') {

                price = 0.7 * count;
                console.log(price);

            } else if (product === 'beer') {

                price = 1.15 * count;
                console.log(price);

            } else if (product === 'sweets') {

                price = 1.3 * count;
                console.log(price);

            } else {

                price = 1.5 * count;
                console.log(price);

            }

            break;

        case 'Varna':

            if (product === 'coffee') {

                price = count * 0.45;
                console.log(price);

            } else if (product === 'water') {

                price = 0.7 * count;
                console.log(price);

            } else if (product === 'beer') {

                price = 1.1 * count;
                console.log(price);

            } else if (product === 'sweets') {

                price = 1.35 * count;
                console.log(price);

            } else {

                price = 1.55 * count;
                console.log(price);

            }

            break;

    }
}
smallShop("coffee", "Varna", 2);
smallShop("peanuts", "Plovdiv", 1);
smallShop("beer", "Sofia", 2);
smallShop("water", "Plovdiv", 2);
smallShop("sweets", "Sofia", 2.23);