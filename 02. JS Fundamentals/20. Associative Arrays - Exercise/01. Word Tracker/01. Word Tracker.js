function worldTracker(arr) {

    let words = arr.shift().split(' ');
    let map = new Map();

    for (let word of words) {

        let count = 0;

        for (let nextWord of arr) {

            if (word === nextWord) {

                count++;

            }

            map.set(word, count);

        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let word of sorted) {

        console.log(`${word[0]} - ${word[1]}`);

    }
}
worldTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
worldTracker(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);