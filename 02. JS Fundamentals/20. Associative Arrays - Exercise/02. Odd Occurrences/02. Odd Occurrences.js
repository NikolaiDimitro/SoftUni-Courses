function oddOccurrences(str) {

    let arrFromWords = str.split(' ');

    let map = new Map();

    for (let word of arrFromWords) {

        word = word.toLowerCase();

        if (!map.has(word)) {

            map.set(word, 1);

        } else {

            let current = map.get(word);
            current++;
            map.set(word, current)

        }
    }

    let newArr = [];

    for (let word of map) {

        if (word[1] % 2 === 1) {

            newArr.push(word[0]);

        }
    }

    console.log(newArr.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');