function searchForANumber(arr1, arr2) {

    arr1 = arr1.slice(0, arr2[0]).slice(arr2[1]).filter((x) => x === arr2[2]);
    console.log(`Number ${arr2[2]} occurs ${arr1.length} times.`);

}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);