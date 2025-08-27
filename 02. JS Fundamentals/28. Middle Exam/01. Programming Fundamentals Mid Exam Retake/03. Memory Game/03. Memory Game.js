function memoryGame(arr) {

    let sequence = arr.shift().split(' ');
    let count = 0;
    let index = 0;

    while (arr[index] !== 'end') {

        let numbs = arr[index];

        let [first, second] = numbs.split(' ');

        first = Number(first);
        second = Number(second);
        count++;

        if (first === second || (first < 0 || first >= sequence.length || second < 0 || second >= sequence.length)) {

            sequence.splice(sequence.length / 2, 0, `-${count}a`, `-${count}a`)
            console.log('Invalid input! Adding additional elements to the board');
            index++;
            continue;

        }

        if (sequence[first] === sequence[second]) {

            console.log(`Congrats! You have found matching elements - ${sequence[first]}!`);

            let max = Math.max(first, second);
            let min = Math.min(first, second);
            sequence.splice(max, 1);
            sequence.splice(min, 1);

        } else {

            console.log('Try again!');

        }

        index++;

        if (sequence.length === 0) {

            console.log(`You have won in ${count} turns!`);
            return;

        }
    }

    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));

}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);