function asciiSumator(arr) {

    let bigger = 0;
    let smaller = 0;
    let sum = 0;
    let asciiNumberForFirstSymbol = arr[0].charCodeAt(0);
    let asciiNumberForSecondSymbol = arr[1].charCodeAt(0);

    if (asciiNumberForFirstSymbol > asciiNumberForSecondSymbol) {

        bigger = asciiNumberForFirstSymbol;
        smaller = asciiNumberForSecondSymbol

    } else {

        bigger = asciiNumberForSecondSymbol;
        smaller = asciiNumberForFirstSymbol;

    }

    for (let symbols of arr[2]) {

        let char = symbols.charCodeAt(0);

        if (char > smaller && char < bigger) {

            sum += char;

        }
    }

    console.log(sum);

}
asciiSumator(['.', '@', 'dsg12gr5653feee5']);
asciiSumator(['?', 'E', '@ABCEF']);
asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']);