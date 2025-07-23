function lowerOrUpper(str) {

    let letter = str.charCodeAt();

    if (letter >= 65 && letter <= 90) {

        console.log('upper-case');

    } else if (letter >= 97 && letter <= 122) {

        console.log('lower-case');

    }
}
lowerOrUpper('L');
lowerOrUpper('f');