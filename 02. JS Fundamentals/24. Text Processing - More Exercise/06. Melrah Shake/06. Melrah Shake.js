function melrahShake(input) {

    let text = input[0];
    let pattern = input[1];

    while (pattern.length > 0) {

        let firstIndex = text.indexOf(pattern);
        let lastIndex = text.lastIndexOf(pattern);

        if (firstIndex !== -1 && lastIndex !== -1 && firstIndex !== lastIndex) {

            text = text.slice(0, firstIndex) + text.slice(firstIndex + pattern.length);

            lastIndex = text.lastIndexOf(pattern);

            text = text.slice(0, lastIndex) + text.slice(lastIndex + pattern.length);

            console.log("Shaked it.");

            let middleIndex = Math.floor(pattern.length / 2);
            pattern = pattern.slice(0, middleIndex) + pattern.slice(middleIndex + 1);

        } else {

            console.log("No shake.");
            console.log(text);
            return;

        }
    }

    console.log("No shake.");
    console.log(text);

}
melrahShake(['astalavista baby', 'sta']);
melrahShake(['##mtm!!mm.mm*mtm.#', 'mtm']);