function palindromeIntegers(arr) {

    let newArray = fromNumbersToString(arr);
    isPalindromeNumbers(newArray);

    function fromNumbersToString(arr) {

        let newArray = [];

        for (let i = 0; i < arr.length; i++) {

            let current = arr[i];
            let newCurrent = current.toString();
            newArray.push(newCurrent);

        }

        return newArray;

    }

    function isPalindromeNumbers(newArray) {

        for (let i = 0; i < newArray.length; i++) {

            let current = newArray[i].split('');
            let secondPast = current.reverse().join('');

            if (newArray[i] === secondPast) {

                console.log(true);

            } else {

                console.log(false);

            }
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);