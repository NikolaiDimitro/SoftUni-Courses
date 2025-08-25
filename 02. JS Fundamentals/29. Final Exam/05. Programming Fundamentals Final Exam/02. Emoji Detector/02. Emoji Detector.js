function emojiDetector(arr) {

    let str = arr.shift();
    let patterForEmoji = /(::|\*\*)(?<emojis>[A-Z][a-z]{2,})\1/g;
    let patternForNumbers = /\d+/g;
    let execForEmoji = patterForEmoji.exec(str);
    let execForNumbers = patternForNumbers.exec(str);
    let sum = 0;
    let allDigits = '';
    let numb = 1;
    let count = 0;
    let arrWithEmojis = [];

    while (execForNumbers !== null) {

        allDigits += execForNumbers[0];
        execForNumbers = patternForNumbers.exec(str);

    }

    for (let digit of allDigits) {

        numb *= digit;

    }

    while (execForEmoji !== null) {

        count++;

        for (let letters of execForEmoji.groups.emojis) {

            let asciiNumber = letters.charCodeAt(0);
            sum += asciiNumber;

        }

        if (sum >= numb) {

            arrWithEmojis.push(execForEmoji[0]);

        }

        sum = 0;
        execForEmoji = patterForEmoji.exec(str);

    }

    console.log(`Cool threshold: ${numb}`);
    console.log(`${count} emojis found in the text. The cool ones are:`);

    for (let emoji of arrWithEmojis) {

        console.log(emoji);

    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);