function rightPlace(str, char, str2) {

    let newWord = '';

    for (let i = 0; i < str.length; i++) {

        if (str[i] === '_') {

            newWord += char;

        } else {

            newWord += str[i];

        }
    }

    if (newWord === str2) {

        console.log('Matched');

    } else {

        console.log('Not Matched');

    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');