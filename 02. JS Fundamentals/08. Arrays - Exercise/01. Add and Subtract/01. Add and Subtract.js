function addAndSubtract(arr) {

    let sumOfOldArray = 0;
    let sumOfNewArray = 0;

    for (let i = 0; i < arr.length; i++) {

        sumOfOldArray += arr[i];

        if (arr[i] % 2 === 0) {

            sumOfNewArray += arr[i] + i;
            arr[i] = arr[i] + i;

        } else {

            sumOfNewArray += arr[i] - i;
            arr[i] = arr[i] - i;

        }
    }

    console.log(arr);
    console.log(sumOfOldArray);
    console.log(sumOfNewArray);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);