function storeProvision(localStore, order) {

    let obj = {};

    for (let i = 0; i < localStore.length; i += 2) {

        let current = localStore[i];
        let countOfProduct = Number(localStore[i + 1]);

        obj[current] = countOfProduct;

    }

    for (let i = 0; i < order.length; i += 2) {

        let current = order[i];
        let countOfProduct = Number(order[i + 1]);

        if (obj[current]) {

            obj[current] += countOfProduct;

        } else {

            obj[current] = countOfProduct;

        }
    }

let entries = Object.entries(obj);

    for(let value in entries) {

console.log(`${entries[value][0]} -> ${entries[value][1]}`);

    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'], ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);