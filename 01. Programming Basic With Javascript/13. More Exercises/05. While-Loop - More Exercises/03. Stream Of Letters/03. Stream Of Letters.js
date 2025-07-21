function streamOfLetters(arr) {

    let index = 0;
    let current = '';
    let countC = 0;
    let countO = 0;
    let countN = 0;
    let result = '';

    while (arr[index] !== 'End') {

        if (index >= arr.length) {

            break;

        }

        let char = arr[index].charCodeAt();

        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {

            if (char === 99) {

                if (countC === 0) {

                    countC++;

                } else {

                    current += arr[index];

                }

            } else if (char === 110) {

                if (countN === 0) {

                    countN++;

                } else {

                    current += arr[index];

                }

            } else if (char === 111) {

                if (countO === 0) {

                    countO++;

                } else {

                    current += arr[index];
                }

            } else {

                current += arr[index];

            }
        }

        index++;

        if (countC >= 1 && countN >= 1 && countO >= 1) {

            current += ' ';
            result += current;
            current = '';
            countC = 0;
            countN = 0;
            countO = 0;

        }
    }

    console.log(result);

}
streamOfLetters(["H", "n", "e", "l", "l", "o", "o", "c", "t", "c", "h", "o", "e", "r", "e", "n", "e", "End"]);
streamOfLetters(["%", "!", "c", "^", "B", "`", "o", "%", "o", "o", "M", ")", "{", "n", "\\", "A", "D", "End"]);
streamOfLetters(["o", "S", "%", "o", "l", "^", "v", "e", "c", "n", "&", "m", "e", "c", "o", "n", "End"])