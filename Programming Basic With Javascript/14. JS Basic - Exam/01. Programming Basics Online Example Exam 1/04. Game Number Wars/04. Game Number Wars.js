function gameNumberWars(arr) {

    let nameOfFirstPlayer = arr[0];
    let nameOfSecondPlayer = arr[1];
    let index = 2;
    let sumOfFirstPlayer = 0;
    let sumOfSecondPlayer = 0;

    while (arr[index] !== 'End of game') {

        let cardOfFirstPalyer = Number(arr[index]);

        index++;

        let cardOfSecondPlayer = Number(arr[index]);

        if (cardOfFirstPalyer > cardOfSecondPlayer) {

            sumOfFirstPlayer += cardOfFirstPalyer - cardOfSecondPlayer;

        } else if (cardOfSecondPlayer > cardOfFirstPalyer) {

            sumOfSecondPlayer += cardOfSecondPlayer - cardOfFirstPalyer;

        } else {

            console.log('Number wars!');

            index++;

            cardOfFirstPalyer = Number(arr[index]);

            index++;

            cardOfSecondPlayer = Number(arr[index]);

            if (cardOfFirstPalyer > cardOfSecondPlayer) {

                console.log(`${nameOfFirstPlayer} is winner with ${sumOfFirstPlayer} points`);
                break;

            } else if (cardOfSecondPlayer > cardOfFirstPalyer) {

                console.log(`${nameOfSecondPlayer} is winner with ${sumOfSecondPlayer} points`);
                break;

            }

            
        }

        index++;
        
    }

    if (arr[index] === 'End of game') {

        console.log(`${nameOfFirstPlayer} has ${sumOfFirstPlayer} points`);
        console.log(`${nameOfSecondPlayer} has ${sumOfSecondPlayer} points`);

    }
}
gameNumberWars((["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]));
gameNumberWars((["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]));
gameNumberWars((["Aleks", "Georgi", "4", "5", "3", "2", "4", "3", "4", "4", "5", "2"]));