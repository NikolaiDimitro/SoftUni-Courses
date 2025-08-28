function guineaPig(arr) {

    let countFood = Number(arr.shift()) * 1000;
    let countHay = Number(arr.shift()) * 1000;
    let countCover = Number(arr.shift()) * 1000;
    let weight = Number(arr.shift()) * 1000;

    for (let i = 1; i <= 30; i++) {

        countFood -= 300;

        if (countFood <= 0) {

            console.log("Merry must go to the pet store!");
            return;

        }

        if (i % 2 === 0) {

            countHay -= countFood * 0.05;

            if (countHay <= 0) {

                console.log("Merry must go to the pet store!");
                return;

            }
        }

        if (i % 3 === 0) {

            countCover -= weight / 3;

            if (countCover <= 0) {

                console.log("Merry must go to the pet store!");
                return;

            }
        }
    }

    console.log(`Everything is fine! Puppy is happy! Food: ${(countFood / 1000).toFixed(2)}, Hay: ${(countHay / 1000).toFixed(2)}, Cover: ${(countCover / 1000).toFixed(2)}.`);

}
guineaPig((["10", "5", "5.2", "1"]));
guineaPig((["1", "1.5", "3", "1.5"]));
guineaPig((["9", "5", "5.2", "1"]));