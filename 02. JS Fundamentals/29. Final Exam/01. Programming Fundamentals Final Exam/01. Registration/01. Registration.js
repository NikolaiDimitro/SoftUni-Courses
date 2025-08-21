function registration(arr) {

    let name = arr.shift();
    let index = 0;

    while (arr[index] !== 'Registration') {

        let current = arr[index];

        if (current.includes('Letters')) {

            let [command, size] = current.split(' ');

            if (size === 'Lower') {

                name = name.toLowerCase();
                console.log(name);

            } else {

                name = name.toUpperCase();
                console.log(name);

            }

        } else if (current.includes('Reverse')) {

            let [command, startIndex, endIndex] = current.split(' ');

            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            if (startIndex >= 0 && startIndex <= name.length && endIndex >= 0 && endIndex <= name.length) {

                let str = name.slice(startIndex, endIndex + 1).split('').reverse().join('');
                console.log(str);

            }

        } else if (current.includes('Substring')) {

            let [command, substring] = current.split(' ');

            if (name.includes(substring)) {

                let startIndex = name.indexOf(substring);
                let lastIndex = startIndex + substring.length;
                name = name.slice(0, startIndex) + name.slice(lastIndex);
                console.log(name);

            } else {

                console.log(`The username ${name} doesn\'t contain ${substring}.`);

            }

        } else if (current.includes('Replace')) {

            let [command, letter] = current.split(' ');

            if (name.includes(letter)) {

                for (let letters of name) {

                    if (letters === letter) {

                        name = name.replace(letters, '-');

                    }
                }

                console.log(name);

            }

        } else if (current.includes('IsValid')) {

            let [command, char] = current.split(' ');

            if (name.includes(char)) {

                console.log('Valid username.');

            } else {

                console.log(`${char} must be contained in your username.`);

            }
        }

        index++;

    }
}
registration(['John', 'Letters Lower', 'Substring SA', 'IsValid @', 'Registration']);
registration(['ThisIsSoftUni', 'Reverse 1 3', 'Replace S', 'Substring hi', 'Registration']);