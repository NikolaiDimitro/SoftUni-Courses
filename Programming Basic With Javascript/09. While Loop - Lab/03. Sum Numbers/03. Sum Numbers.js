function sumNumbers(arr) {

    let maxNumber = Number(arr[0]);
    let total = 0;
    let index = 1;

    while (maxNumber > total) {

        total += Number(arr[index]);
        index++;

    }

    console.log(total);

}
sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);