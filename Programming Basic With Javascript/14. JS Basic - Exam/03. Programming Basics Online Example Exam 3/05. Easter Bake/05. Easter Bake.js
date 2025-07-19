function easterBake(arr) {

    let countCozunacis = Number(arr[0]);
    let totalCountSugar = 0;
    let totalCountFlour = 0;
    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= countCozunacis * 2; i += 2) {

        let countSugar = Number(arr[i]);
        let countFlour = Number(arr[i + 1]);

        totalCountSugar += countSugar;
        totalCountFlour += countFlour;

        if (countSugar > maxSugar) {

            maxSugar = countSugar;

        }

        if (countFlour > maxFlour) {

            maxFlour = countFlour;

        }
    }

    console.log(`Sugar: ${Math.ceil(totalCountSugar / 950)}`);
    console.log(`Flour: ${Math.ceil(totalCountFlour / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);