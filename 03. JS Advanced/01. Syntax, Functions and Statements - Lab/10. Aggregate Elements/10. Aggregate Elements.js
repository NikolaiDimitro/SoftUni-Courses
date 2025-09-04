function aggregateElemtnts(arr) {

    let firstSum = 0;
    let secondSum = 0;
    let thirdSum = '';

    for (let numb of arr) {

        firstSum += numb;
        secondSum += 1 / numb;
        thirdSum += `${numb}`;

    }

    console.log(firstSum);
    console.log(secondSum);
    console.log(thirdSum);

}
aggregateElemtnts([1, 2, 3]);
aggregateElemtnts([2, 4, 8, 16]);