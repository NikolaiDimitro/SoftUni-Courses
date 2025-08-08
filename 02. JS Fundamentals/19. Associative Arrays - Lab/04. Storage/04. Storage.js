function storage(arr) {

    let map = new Map();

    for (let product of arr) {

        let [products, quantity] = product.split(' ');

        if (!map.has(products)) {

            map.set(products, +Number(quantity));

        } else {

            let hasProduct = map.get(products);
            let moreQuntity = hasProduct += Number(quantity);
            map.set(products, moreQuntity);

        }
    }

    for (let product of map) {

        console.log(`${product[0]} -> ${product[1]}`);

    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);