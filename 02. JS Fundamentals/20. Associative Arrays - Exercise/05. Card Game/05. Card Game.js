function cardGame(arr) {

    let obj = {};

    for (let human of arr) {

        let [name, allCards] = human.split(': ');
        allCards = allCards.split(', ');
        let set = new Set();

        for (let card of allCards) {

            set.add(card);

        }

        if (obj.hasOwnProperty(name)) {

            let values = Object.values(obj[name]);
            let newSet = new Set([...values, ...set]);

            obj[name] = [...newSet];

        } else {

            obj[name] = [...set];

        }
    }

    for (let key in obj) {

        let total = 0;

        for (let card of obj[key]) {

            if (card.length > 2) {

                card = card.split('');
                card[0] = card[0] + card[1];
                card.splice(1, 1);

            } else {

                card = card.split('');

            }

            let cardValue = 0;
            let sum = 0;
            let arrOfNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            let numb = '';

            if (arrOfNumbers.includes(card[0])) {

                numb = Number(card[0]);

            }

            if (numb >= Number('1') && numb <= Number('10')) {

                cardValue = Number(card[0]);

            } else if (card[0] === 'J') {

                cardValue = 11;

            } else if (card[0] === 'Q') {

                cardValue = 12;

            } else if (card[0] === 'K') {

                cardValue = 13;

            } else if (card[0] === 'A') {

                cardValue = 14;

            }

            if (card[1] === 'S') {

                sum = cardValue * 4;

            } else if (card[1] === 'H') {

                sum = cardValue * 3;

            } else if (card[1] === 'D') {

                sum = cardValue * 2;

            } else if (card[1] === 'C') {

                sum = cardValue * 1;

            }

            total += sum

        }

        obj[key] = total;

    }

    for (let people in obj) {

        console.log(`${people}: ${obj[people]}`);

    }
}
cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD']);
cardGame(['John: 2C, 4H, 9H, AS, QS', 'Slav: 3H, 10S, JC, KD, 5S, 10S', 'Alex: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'Slav: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'Alex: 6H, 7S, KC, KD, 5S, 10C', 'Thomas: QH, QC, JS, JD, JC', 'John: JD, JD, JD, JD']);