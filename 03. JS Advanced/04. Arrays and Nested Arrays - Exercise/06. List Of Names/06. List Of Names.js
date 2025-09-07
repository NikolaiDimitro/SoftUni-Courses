function listOfName(arr) {

    let numb = 1;
    arr.sort((a, b) => a.localeCompare(b));

    for (let name of arr) {

        console.log(`${numb}.${name}`);
        numb++;

    }
}
listOfName(["John", "Bob", "Christina", "Ema"]);