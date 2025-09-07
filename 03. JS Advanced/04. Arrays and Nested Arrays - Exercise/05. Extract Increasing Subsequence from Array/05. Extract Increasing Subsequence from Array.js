function extractIncreasingSubsequenceFromArray(arr) {

    let newArray = arr.reduce((acc, curr, currentIndex) => {

        if (currentIndex === 0) {

            acc.push(curr);

        }

        if (curr >= acc[acc.length - 1] && currentIndex !== 0) {

            acc.push(curr);

        }

        return acc;

    }, []);

    return newArray;

}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);