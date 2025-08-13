function seriaLizeString(arr) {

    let map = new Map();

    for (let i = 0; i < arr[0].length; i++) {

        let letter = arr[0][i];

        if (!map.has(letter)) {

            map.set(letter, [i]);

        } else {

            let current = map.get(letter);
            current.push(i);
            map.set(letter, current);

        }
    }

    for (let letters of map) {

        let keys = letters[1];
        console.log(`${letters[0]}:${keys.join('/')}`);

    }
}
seriaLizeString(["abababa"]);
seriaLizeString(["avjavamsdmcalsdm"]);