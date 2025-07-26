function order(product, countProducts) {

    let totalPrice = 0;

    if (product === 'coffee') {

        totalPrice = countProducts * 1.5

    } else if (product === 'water') {

        totalPrice = countProducts * 1;

    } else if (product === 'coke') {

        totalPrice = countProducts * 1.4;

    } else if (product === 'snacks') {

        totalPrice = countProducts * 2;

    }

    console.log(totalPrice.toFixed(2));

}
order("water", 5);
order("coffee", 2);