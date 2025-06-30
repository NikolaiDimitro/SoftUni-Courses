function fruitShop(food, day, quantity) {

    let price = 0;

    switch (day) {

        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':

            if (food === 'banana') {

                price = quantity * 2.5;
                console.log(price.toFixed(2));

            } else if (food === 'apple') {

                price = quantity * 1.2;
                console.log(price.toFixed(2));

            } else if (food === 'orange') {

                price = quantity * 0.85;
                console.log(price.toFixed(2));

            } else if (food === 'grapefruit') {

                price = quantity * 1.45;
                console.log(price.toFixed(2));

            } else if (food === 'kiwi') {

                price = quantity * 2.7;
                console.log(price.toFixed(2));

            } else if (food === 'pineapple') {

                price = quantity * 5.5;
                console.log(price.toFixed(2));

            } else if (food === 'grapes') {

                price = quantity * 3.85;
                console.log(price.toFixed(2));

            } else {

                console.log('error');

            }

            break;

        case 'Saturday':
        case 'Sunday':

            if (food === 'banana') {

                price = quantity * 2.7;
                console.log(price.toFixed(2));

            } else if (food === 'apple') {

                price = quantity * 1.25;
                console.log(price.toFixed(2));

            } else if (food === 'orange') {

                price = quantity * 0.90;
                console.log(price.toFixed(2));

            } else if (food === 'grapefruit') {

                price = quantity * 1.60;
                console.log(price.toFixed(2));

            } else if (food === 'kiwi') {

                price = quantity * 3;
                console.log(price.toFixed(2));

            } else if (food === 'pineapple') {

                price = quantity * 5.6;
                console.log(price.toFixed(2));

            } else if (food === 'grapes') {

                price = quantity * 4.2;
                console.log(price.toFixed(2));

            } else {

                console.log('error');

            }

            break;

        default:

            console.log('error');

    }
}
fruitShop("apple", "Tuesday", 2);
fruitShop("orange", "Sunday", 3);
fruitShop("kiwi", "Monday", 2.5);
fruitShop("grapes", "Saturday", 0.5);
fruitShop("tomato", "Monday", 0.5);