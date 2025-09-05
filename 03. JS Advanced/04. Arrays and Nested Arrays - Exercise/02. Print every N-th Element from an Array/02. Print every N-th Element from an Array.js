function printEveryNthElementFromAnArray(arr, step) {

    let newArr = [];

    for (let i = 0; i < arr.length; i += step) {

        newArr.push(arr[i]);

    }

    return newArr

}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20'], 2);
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'], 2);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6);