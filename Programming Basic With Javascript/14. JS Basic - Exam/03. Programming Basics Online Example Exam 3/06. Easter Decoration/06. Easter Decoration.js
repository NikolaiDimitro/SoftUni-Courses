function easterDecoration(arr) {

    let index = 1;
    let countProduct = 0;
    let countBuyers = 0;
    let currentMoney = 0;
    let totalMoney = 0;

    while (index <= arr.length - 1) {

        countBuyers++;

        while (arr[index] !== 'Finish') {

            let current = arr[index];


            if (current === 'basket') {

                currentMoney += 1.5;
                countProduct++;

            } else if (current === 'wreath') {

                currentMoney += 3.8;
                countProduct++

            } else if (current === 'chocolate bunny') {

                currentMoney += 7;
                countProduct++;

            }

            index++;

        }

        if (countProduct % 2 === 0) {

            currentMoney *= 0.8;

        }

        console.log(`You purchased ${countProduct} items for ${currentMoney.toFixed(2)} leva.`);

        totalMoney += currentMoney;
        currentMoney = 0;
        countProduct = 0;

        index++

    }

    console.log(`Average bill per client is: ${((totalMoney / countBuyers)).toFixed(2)} leva.`);

}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"]);
easterDecoration(["1", "basket", "wreath", "chocolate bunny", "wreath", "basket", "chocolate bunny", "Finish"]);