function averageNumber(arr) {

    let total = 0;
    let count = 0;

    for (let i = 1; i < arr.length; i++) {

        let numb = Number(arr[i]);
        count++;
        total += numb;

    }

    console.log((total / count).toFixed(2));

}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);