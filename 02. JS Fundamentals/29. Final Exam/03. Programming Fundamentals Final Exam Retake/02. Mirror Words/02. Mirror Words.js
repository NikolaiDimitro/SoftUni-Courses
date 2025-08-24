function mirrorWords(input) {

    let text = input[0];
    let pattern = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let matches = [...text.matchAll(pattern)];
    let pairsCount = matches.length;
    let mirrorWordsArr = [];

    if (pairsCount === 0) {

        console.log("No word pairs found!");
        console.log("No mirror words!");
        return;

    }

    console.log(`${pairsCount} word pairs found!`);

    for (let match of matches) {

        let wordOne = match[2];
        let wordTwo = match[3];
        let reversed = wordTwo.split('').reverse().join('');

        if (wordOne === reversed) {

            mirrorWordsArr.push(`${wordOne} <=> ${wordTwo}`);

        }
    }

    if (mirrorWordsArr.length === 0) {

        console.log("No mirror words!");

    } else {

        console.log("The mirror words are:");
        console.log(mirrorWordsArr.join(", "));

    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);