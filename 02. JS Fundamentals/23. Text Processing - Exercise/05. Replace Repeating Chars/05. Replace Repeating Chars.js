function replaceRepeatingChars(str) {

    let newLetter = '';
    let result = '';

    for (let letters of str) {

        if (letters !== newLetter) {

            newLetter = letters;
            result += letters;

        }
    }

    console.log(result);

}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');