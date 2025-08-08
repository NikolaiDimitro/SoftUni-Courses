function wordOccurrences(arr) {

    let map = new Map();

    for (let word of arr) {

        let count = 0;

        for (let newWord of arr) {

            if (word === newWord) {

                count++;

            }

            map.set(word, count);

        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let word of sorted) {

        console.log(`${word[0]} -> ${word[1]} times`);

    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);