function asciiValuesOfReversedCharacters(firts, second, third) {

    let reversed = third + second + firts;

    console.log(reversed);

    let asciiValues = `${reversed.charCodeAt(0)} ${reversed.charCodeAt(1)} ${reversed.charCodeAt(2)}`;

    console.log(asciiValues);
}
asciiValuesOfReversedCharacters('a', 'b', 'c');
asciiValuesOfReversedCharacters('%', '2', 'o');
asciiValuesOfReversedCharacters('1', '5', 'p');