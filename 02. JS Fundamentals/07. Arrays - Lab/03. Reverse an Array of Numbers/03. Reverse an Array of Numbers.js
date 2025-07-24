function reverseAnArryOfNumbers(n, arr) {

    let newArr = arr.slice(0, n);
    console.log(newArr.reverse().join(' '));

}
reverseAnArryOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArryOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArryOfNumbers(2, [66, 43, 75, 89, 47]);