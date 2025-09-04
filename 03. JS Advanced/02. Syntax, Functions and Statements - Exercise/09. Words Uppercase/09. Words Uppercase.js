function wordsUppercase(str) {

    let pattern = /(?<words>\w+)/g;
    let match = str.match(pattern);
    let arr = [];

    for (let word of match) {

        word = word.toUpperCase();
        arr.push(word);

    }

    console.log(arr.join(', '));

}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');