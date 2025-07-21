function oddEventPosition(input) {
    let n = Number(input[0]);

    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;

    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {

        let num = Number(input[i]);

        if (i % 2 !== 0) {

            oddSum += num;
            if (num < oddMin) {

                oddMin = num;

            }
            if (num > oddMax) {

                oddMax = num;

            }

        } else {

            evenSum += num;

            if (num < evenMin) {

                evenMin = num;

            }

            if (num > evenMax) {

                evenMax = num;

            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(oddMin === Number.POSITIVE_INFINITY ? "OddMin=No," : `OddMin=${oddMin.toFixed(2)},`);
    console.log(oddMax === Number.NEGATIVE_INFINITY ? "OddMax=No," : `OddMax=${oddMax.toFixed(2)},`);

    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(evenMin === Number.POSITIVE_INFINITY ? "EvenMin=No," : `EvenMin=${evenMin.toFixed(2)},`);
    console.log(evenMax === Number.NEGATIVE_INFINITY ? "EvenMax=No" : `EvenMax=${evenMax.toFixed(2)}`);
}
oddEventPosition((["6", "2", "3", "5", "4", "2", "1"]));
oddEventPosition((["2", "1.5", "-2.5"]));
oddEventPosition((["1", "1"]));
oddEventPosition((["0"]));
oddEventPosition((["5", "3", "-2", "8", "11", "-3"]));
oddEventPosition((["4", "1.5", "1.75", "1.5", "1.75"]));
oddEventPosition((["1", "-5"]));
oddEventPosition((["3", "-1", "-2", "-3"]));