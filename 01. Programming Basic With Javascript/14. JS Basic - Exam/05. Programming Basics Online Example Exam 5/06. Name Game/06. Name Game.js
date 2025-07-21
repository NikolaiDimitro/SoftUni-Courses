function nameGame(arr) {

    let index = 0;
    let sum = 0;
    let maxNumber = 0;
    let winner = '';

    while (arr[index] !== 'Stop') {

        let currentName = arr[index];
        let lengthOfCurrentName = currentName.length;

        index++;

        for (let i = 0; i < lengthOfCurrentName; i++) {

            let currentNumber = Number(arr[index]);

            for (let j = 1; j <= lengthOfCurrentName; j++) {

                let currentLetter = currentName[i];
                let numberOfASCII = currentLetter.charCodeAt();

                if (numberOfASCII === currentNumber) {

                    sum += 10;
                    break;

                } else {

                    sum += 2;
                    break;

                }
            }

            index++;

        }

        if (maxNumber < sum) {

            maxNumber = sum;
            winner = currentName;

        } else if (maxNumber === sum) {

            winner = currentName;

        }

        sum = 0;

    }

    console.log(`The winner is ${winner} with ${maxNumber} points!`);

}
nameGame(["Ivan", "73", "20", "98", "110", "Ivo", "80", "65", "87", "Stop"]);
nameGame(["Pesho", "124", "34", "111", "97", "99", "Gosho", "98", "124", "88", "76", "18", "Stop"]);