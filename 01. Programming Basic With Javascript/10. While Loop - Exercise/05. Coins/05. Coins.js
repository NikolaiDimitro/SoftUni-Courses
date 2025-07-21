function coins(input) {
    let instead = Number(input);
    let countCoins = 0;
    let index = Math.round(instead * 100);

    while (index > 0) {

        if (index >= 200) {

            index -= 200;

        } else if (index >= 100) {

            index -= 100;

        } else if (index >= 50) {

            index -= 50;

        } else if (index >= 20) {
            index -= 20;

        } else if (index >= 10) {

            index -= 10;

        } else if (index >= 5) {

            index -= 5;

        } else if (index >= 2) {

            index -= 2;

        } else if (index >= 1) {
            
            index -= 1;

        }

        countCoins++;

    }

    console.log(countCoins);

}
coins(1.23);
coins(2);
coins(0.56);
coins(2.73);