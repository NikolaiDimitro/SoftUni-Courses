function passwordReset(arr) {

    let str = arr.shift();
    let newStr = '';
    let index = 0;

    while (arr[index] !== 'Done') {

        let current = arr[index];

        if (current.includes('TakeOdd')) {

            for (let i = 0; i < str.length; i++) {

                let letter = str[i];

                if (i % 2 === 1) {

                    newStr += letter;

                }
            }

            str = newStr;
            console.log(str);

        } else if (current.includes('Cut')) {

            let [command, index, length] = current.split(' ');

            let first = str.substring(0, Number(index));
            let second = str.substring(Number(index) + Number(length));
            str = first + second;
            console.log(str);

        } else if (current.includes('Substitute ')) {

            let [command, substring, substitute] = current.split(' ');

            if (str.includes(substring)) {

                for (let letter of str) {

                    str = str.replace(substring, substitute);

                }

                console.log(str);

            } else {

                console.log('Nothing to replace!');

            }
        }

        index++;

    }

    console.log(`Your password is: ${str}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", "TakeOdd", "Cut 15 3", "Substitute :: -", "Substitute | ^", "Done"]);
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy", "TakeOdd", "Cut 18 2", "Substitute ! ***", "Substitute ? .!.", "Done"]);