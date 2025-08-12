function revealWords(words, text) {

    words = words.split(', ');
    text = text.split(' ');

    for (let word of text) {

        if (word.includes('*')) {

            let lengthOfWord = word.length;

            for (let w of words) {

                if (w.length === lengthOfWord) {

                    let index = text.indexOf(word);
                    text.splice(index, 1, w);

                }
            }
        }
    }

    console.log(text.join(' '));

}
revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');