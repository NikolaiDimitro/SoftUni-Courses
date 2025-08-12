function censoredWord(text, word) {

    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)) {

        censored = censored.replace(word, repeat(word));

    }

    function repeat(word) {

        return word = '*'.repeat(word.length);

    }

    console.log(censored);

}
censoredWord('A small sentence with some words', 'small');
censoredWord('Find the hidden word', 'hidden');