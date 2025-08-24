function secretChat(arr) {

    let message = arr.shift();
    let index = 0;

    while (arr[index] !== 'Reveal') {

        let current = arr[index];

        if (current.includes('InsertSpace')) {

            let [command, index] = current.split(':|:');

            let first = message.substring(0, index);
            let second = message.substring(index);
            message = first + ' ' + second;
            console.log(message);

        } else if (current.includes('Reverse')) {

            let [command, substring] = current.split(':|:');

            if (message.includes(substring)) {

                let ind = message.indexOf(substring) + substring.length;
                let first = message.substring(0, message.indexOf(substring));
                let second = message.substring(ind);

                substring = substring.split('').reverse().join('');
                message = first + second + substring;
                console.log(message);

            } else {

                console.log('error');

            }

        } else {

            let [command, substring, replacement] = current.split(':|:');

            for (let letter of message) {

                if (message.includes(substring)) {

                    message = message.replace(substring, replacement);

                }
            }

            console.log(message);

        }

        index++;

    }

    console.log(`You have a new text message: ${message}`);

}
secretChat(['heVVodar!gniV', 'ChangeAll:|:V:|:l', 'Reverse:|:!gnil', 'InsertSpace:|:5', 'Reveal']);
secretChat(['Hiware?uiy', 'ChangeAll:|:i:|:o', 'Reverse:|:?uoy', 'Reverse:|:jd', 'InsertSpace:|:3', 'InsertSpace:|:7', 'Reveal']);