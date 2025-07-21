function easterEggsBattle(arr) {

    let index = 2;
    let countEggsOfFirstPlayer = Number(arr[0]);
    let countEggsOfSecondPlayer = Number(arr[1]);

    while (arr[index] !== 'End') {

        let current = arr[index];

        if (current === 'one') {

            countEggsOfSecondPlayer--;

        } else if (current === 'two') {

            countEggsOfFirstPlayer--;

        }

        if (countEggsOfFirstPlayer === 0) {

            console.log(`Player one is out of eggs. Player two has ${countEggsOfSecondPlayer} eggs left.`);
            return;

        } else if (countEggsOfSecondPlayer === 0) {

            console.log(`Player two is out of eggs. Player one has ${countEggsOfFirstPlayer} eggs left.`);
            return;

        }

        index++;

        if (arr[index] === 'End') {

            console.log(`Player one has ${countEggsOfFirstPlayer} eggs left.`);
            console.log(`Player two has ${countEggsOfSecondPlayer} eggs left.`);

        }
    }
}
easterEggsBattle((["5", "4", "one", "two", "one", "two", "two", "End"]));
easterEggsBattle((["2", "6", "one", "two", "two"]));
easterEggsBattle((["6", "3", "one", "two", "two", "one", "one"]));