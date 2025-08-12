function pascalCaseSplittyer(text) {

    let str = '';
    let arr = [];

    for (let i = 0; i < text.length; i++) {

        let letter = text[i];

        if (i === 0) {

            str += letter;
            continue;

        }

        let char = letter.charCodeAt(0);

        if (char >= '65' && char <= 90) {

            arr.push(str);
            str = '' + letter;

        } else {

            str += letter;

        }
    }

    arr.push(str);
    console.log(arr.join(', '));

}
pascalCaseSplittyer('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplittyer('HoldTheDoor');
pascalCaseSplittyer('ThisIsSoAnnoyingToDo');