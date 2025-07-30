function firstAndLastKNumbers(arr) {

    let countOfPrintNumber = arr.shift();
    let firstKNUmbers = arr.slice(0, countOfPrintNumber);
    let lastKNumber = arr.slice(arr.length - countOfPrintNumber);
    console.log(firstKNUmbers.join(' '));
    console.log(lastKNumber.join(' '));

}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);