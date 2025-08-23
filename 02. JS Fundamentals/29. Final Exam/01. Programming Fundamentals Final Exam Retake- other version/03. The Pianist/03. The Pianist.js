function thePianist(arr) {

    let index = Number(arr.shift());
    let obj = {};

    for (let i = 0; i < index; i++) {

        let current = arr[i];

        let [piece, composer, key] = current.split('|');

        if (!obj.hasOwnProperty(piece)) {

            obj[piece] = { composer: composer, key: key };

        }
    }

    while (arr[index] !== 'Stop') {

        let current = arr[index];

        if (current.includes('Add')) {

            let [command, piece, composer, key] = current.split('|');

            if (!obj.hasOwnProperty(piece)) {

                obj[piece] = { composer: composer, key: key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);

            } else {

                console.log(`${piece} is already in the collection!`);

            }

        } else if (current.includes('Remove')) {

            let [command, piece] = current.split('|');

            if (obj.hasOwnProperty(piece)) {

                delete obj[piece];
                console.log(`Successfully removed ${piece}!`);

            } else {

                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }
        } else if (current.includes('ChangeKey')) {

            let [command, piece, newKey] = current.split('|');

            if (obj.hasOwnProperty(piece)) {

                obj[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);

            } else {

                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }
        }

        index++;

    }

    let entries = Object.entries(obj);

    for (let piece of entries) {

        console.log(`${piece[0]} -> Composer: ${piece[1].composer}, Key: ${piece[1].key}`);

    }
}
thePianist(['3', 'Fur Elise|Beethoven|A Minor', 'Moonlight Sonata|Beethoven|C# Minor', 'Clair de Lune|Debussy|C# Minor', 'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune', 'ChangeKey|Moonlight Sonata|C# Major', 'Stop']);
thePianist(['4', 'Eine kleine Nachtmusik|Mozart|G Major', 'La Campanella|Liszt|G# Minor', 'The Marriage of Figaro|Mozart|G Major', 'Hungarian Dance No.5|Brahms|G Minor', 'Add|Spring|Vivaldi|E Major', 'Remove|The Marriage of Figaro', 'Remove|Turkish March', 'ChangeKey|Spring|C Major', 'Add|Nocturne|Chopin|C# Minor', 'Stop']);