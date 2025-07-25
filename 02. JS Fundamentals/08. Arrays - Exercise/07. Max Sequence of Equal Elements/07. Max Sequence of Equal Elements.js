function maxSequenceOfEqualElements(arr) {

    let longArrCheck = [];
    let longest = [];

    for (let j = 0; j < arr.length; j++) {

        longArrCheck = [arr[j]]

        for (let i = j + 1; i < arr.length; i++) {

            if (arr[j] === arr[i]) {

                longArrCheck.push(arr[i]);

            } else {

                break;

            }
        }

        if (longArrCheck.length > longest.length) {

            longest = longArrCheck;

        }

        j += longArrCheck.length - 1;

    }

    console.log(longest.join(` `));

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);