function charactersInRange(firstSymbol, secondSymbol) {

    let asciiNumberOfFirstSymbol = firstSymbol.charCodeAt();
    let asciiNumberOfSecondSymbol = secondSymbol.charCodeAt();
    let print = [];

    if (asciiNumberOfFirstSymbol >= asciiNumberOfSecondSymbol) {

        fromFirstToSecondSymbol(asciiNumberOfSecondSymbol, asciiNumberOfFirstSymbol);

    } else {

        fromSecondToFirstSymbol(asciiNumberOfFirstSymbol, asciiNumberOfSecondSymbol);

    }

    function fromFirstToSecondSymbol(x, y) {

        for (let i = x + 1; i < y; i++) {

            let current = String.fromCharCode(i);
            print.push(current);

        }

        console.log(print.join(' '));

    }

    function fromSecondToFirstSymbol(x, y) {

        for (let i = x + 1; i < y; i++) {

            let current = String.fromCharCode(i);
            print.push(current);

        }

        console.log(print.join(' '));

    }
}
charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');