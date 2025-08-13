function treasureFinder(arr) {

    let index = 1;
    let index2 = 0;
    let newArr = [];
    let key = arr[0];
    let strSet = new Set();
    key = key.split(' ').join('');

    while (arr[index] !== 'find') {

        let current = arr[index];

        for (let symbol of current) {

            let char = symbol.charCodeAt(0);

            if (index2 >= key.length) {

                index2 = 0;

            }

            let end = index2 + 1;

            while (index2 < end) {

                char -= Number(key[index2]);
                index2++;

            }

            newArr.push(char);

        }

        let str = '';

        for (let numb of newArr) {

            let char = String.fromCharCode(numb);
            str += char;

        }

        strSet.add(str);
        str = '';
        newArr = [];
        index2 = 0;

        index++;

    }

    for (let cord of strSet) {


        if (!cord.includes('&') || !cord.includes('<')) {

            continue;

        }

        let [word, treasure, cordinate] = cord.split('&');
        let [trash, cordi] = cordinate.split('<');

        if (!cordinate.includes('<')) continue;

        let str = '';

        for (let i = 0; i <= cordi.length - 2; i++) {

            str += cordi[i];

        }

        console.log(`Found ${treasure} at ${str}`);

    }
}
treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
treasureFinder(["1 4 2 5 3 2 1", `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`, "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC", "'stj)>34W68Z@", "find"]);