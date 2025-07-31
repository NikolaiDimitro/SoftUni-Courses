function bombNumbers(first, second) {

    let bombNumber = second[0];
    let power = second[1];

    while (first.includes(bombNumber)) {

        let index = first.indexOf(bombNumber);
        let start = Math.max(0, index - power);
        let deleteCount = power * 2 + 1;

        first.splice(start, deleteCount);

    }

    let sum = first.reduce((a, b) => a + b, 0);
    console.log(sum);

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);