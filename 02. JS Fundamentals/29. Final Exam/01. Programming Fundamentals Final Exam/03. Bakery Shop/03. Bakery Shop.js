function bakeryShop(arr) {

    let index = 0;
    let obj = {};
    let count = 0;

    while (arr[index] !== 'Complete') {

        let current = arr[index];

        if (current.includes('Receive')) {

            let [command, quantity, food] = current.split(' ');

            if (Number(quantity) <= 0) {

                continue;

            }

            if (!obj.hasOwnProperty(food)) {

                obj[food] = Number(quantity);

            } else {

                obj[food] += Number(quantity);

            }
        } else if (current.includes('Sell')) {

            let [command, quantity, food] = current.split(' ');

            if (!obj.hasOwnProperty(food)) {

                console.log(`You do not have any ${food}.`);

            } else {

                if (obj[food] < Number(quantity)) {

                    count += obj[food];
                    console.log(`There aren't enough ${food}. You sold the last ${obj[food]} of them.`);
                    delete obj[food];

                } else if (obj[food] === Number(quantity)) {

                    count += Number(quantity);
                    console.log(`You sold ${quantity} ${food}.`);
                    delete obj[food];

                } else {

                    obj[food] -= quantity;
                    count += Number(quantity);
                    console.log(`You sold ${quantity} ${food}.`);

                }
            }
        }

        index++;

    }

    let entries = Object.entries(obj);

    for (let product of entries) {

        console.log(`${product[0]}: ${product[1]}`);

    }

    console.log(`All sold: ${count} goods`);

}
bakeryShop(['Receive 105 cookies', 'Receive 10 donuts', 'Sell 10 donuts', 'Sell 1 bread', 'Complete']);
bakeryShop(['Receive 10 muffins', 'Receive 23 bagels', 'Sell 5 muffins', 'Sell 10 bagels', 'Complete']);