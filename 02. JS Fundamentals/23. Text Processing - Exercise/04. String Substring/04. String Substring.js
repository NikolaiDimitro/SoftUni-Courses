function stringSubstring(word, text) {

    text = text.split(' ');

    for (let words of text) {

        if (word.toLowerCase() === words.toLowerCase()) {

            console.log(word);

            return;

        }
    }

    console.log(`${word} not found!`);

}
stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');