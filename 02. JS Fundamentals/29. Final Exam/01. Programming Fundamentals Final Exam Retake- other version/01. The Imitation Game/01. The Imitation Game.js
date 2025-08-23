function theImitationGame(arr) {

    let message = arr.shift();
    let index = 0;

    while (arr[index] !== 'Decode') {

        let current = arr[index];

        if (current.includes('Move')) {

            let [command, countLetters] = current.split('|');

            countLetters = Number(countLetters);
            let first = message.substring(0, countLetters);
            let second = message.substring(countLetters);
            message = second + first;

        } else if (current.includes('Insert')) {

            let [command, index, value] = current.split('|');

            let char = message.split('');
            char.splice(index, 0, value);
            message = char.join('');

        } else if (current.includes('ChangeAll')) {

            let [command, substring, replacement] = current.split('|');

            for (let letter of message) {

                message = message.replace(substring, replacement);

            }
        }

        index++;

    }

    console.log(`The decrypted message is: ${message}`);

}
theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode',]);
theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode',]);