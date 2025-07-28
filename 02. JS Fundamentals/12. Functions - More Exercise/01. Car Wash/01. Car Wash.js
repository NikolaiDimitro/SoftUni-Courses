function carWash(arr) {

    let valueClean = 0;

    for (let i = 0; i < arr.length; i++) {

        let cureent = arr[i];

        if (cureent === 'soap') {

            valueClean = soap(valueClean);

        } else if (cureent === 'water') {

            valueClean = water(valueClean);

        } else if (cureent === 'vacuum cleaner') {

            valueClean = vacumCleaner(valueClean);

        } else {

            valueClean = mud(valueClean);

        }
    }

    function soap(value) {

        return value += 10;

    }

    function water(value) {

        return value *= 1.2;

    }

    function vacumCleaner(value) {

        return value *= 1.25;

    }

    function mud(value) {

        return value *= 0.9;

    }

    console.log(`The car is ${valueClean.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);