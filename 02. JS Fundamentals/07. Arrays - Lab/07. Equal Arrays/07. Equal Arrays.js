function equalArray(arr1, arr2) {

    let isEqual = true;
    let sum = 0;

    if (arr1.length >= arr2.length) {

        for (let i = 0; i < arr1.length; i++) {

            let current = Number(arr1[i]);
            sum += current;

            if (arr1[i] !== arr2[i]) {

                console.log(`Arrays are not identical. Found difference at ${i} index`);
                isEqual = false;
                break;

            }
        }

    } else {

        for (let i = 0; i < arr2.length; i++) {

            if (arr1[i] !== arr2[i]) {

                console.log(`Arrays are not identical. Found difference at ${i} index`);
                isEqual = false;
                break;

            }
        }
    }

    if (isEqual) {

        console.log(`Arrays are identical. Sum: ${sum}`);

    }
}
equalArray(['10', '20', '30'], ['10', '20', '30']);
equalArray(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArray(['1'], ['10']);