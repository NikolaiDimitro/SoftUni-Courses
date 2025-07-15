function averageNumber(arr) {

    let index = 1;
    let total = 0;
    let count = 0;

    while (index < arr.length) {

        let numb = Number(arr[index]);

        total += numb;
        count++;
        index++;

    }

    console.log((total / count).toFixed(2));

}
averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);