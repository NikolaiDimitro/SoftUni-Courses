function valueOfAString(arr) {

    let sum = 0;

    for (let symbol of arr[0]) {

        let char = symbol.charCodeAt(0);

        if (arr[1] === 'LOWERCASE' && (char >= 97 && char <= 122)) {

            sum += char;

        } else if (arr[1] === 'UPPERCASE' && (char >= 65 && char <= 90)) {

            sum += char;

        }
    }

    console.log(`The total sum is: ${sum}`);

}
valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfAString(['AC/DC', 'UPPERCASE']);