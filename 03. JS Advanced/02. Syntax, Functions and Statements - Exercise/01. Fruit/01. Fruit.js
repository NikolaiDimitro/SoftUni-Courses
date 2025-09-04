function fruit(fruit, quantity, money) {

    console.log(`I need $${((quantity / 1000) * money).toFixed(2)} to buy ${(quantity / 1000).toFixed(2)} kilograms ${fruit}.`);

}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);