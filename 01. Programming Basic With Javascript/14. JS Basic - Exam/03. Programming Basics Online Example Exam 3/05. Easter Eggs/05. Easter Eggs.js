function easterEgg(arr) {

    let totalEggs = Number(arr[0]);
    let countRed = 0;
    let countOrange = 0;
    let countBlue = 0;
    let countGreen = 0;
    let maxColor = Number.MIN_SAFE_INTEGER;
    let color = '';

    for (let i = 1; i <= totalEggs; i++) {

        let current = arr[i];

        if (current === 'red') {

            countRed++;

        } else if (current === 'orange') {

            countOrange++;

        } else if (current === 'blue') {

            countBlue++;

        } else if (current === 'green') {

            countGreen++;

        }

    }

    for (let i = 1; i <= 4; i++) {

        if (countBlue > maxColor) {

            maxColor = countBlue;
            color = 'blue';

        } else if (countGreen > maxColor) {

            maxColor = countGreen;
            color = 'green';

        } else if (countOrange > maxColor) {

            maxColor = countOrange;
            color = 'orange';

        } else if (countRed > maxColor) {

            maxColor = countRed;
            color = 'red';

        }
    }

    console.log(`Red eggs: ${countRed}`);
    console.log(`Orange eggs: ${countOrange}`);
    console.log(`Blue eggs: ${countBlue}`);
    console.log(`Green eggs: ${countGreen}`);
    console.log(`Max eggs: ${maxColor} -> ${color}`);

}
easterEgg(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEgg(["4", "blue", "red", "blue", "orange"]);