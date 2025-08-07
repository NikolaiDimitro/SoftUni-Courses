function sequences(arr) {

    let uniqueArrays = [];

    for (let line of arr) {

        let parsed = JSON.parse(line).map(Number);
        parsed.sort((a, b) => b - a); 
        let isDuplicate = false;

        for (let existing of uniqueArrays) {

            if (arraysAreEqual(parsed, existing)) {

                isDuplicate = true;
                break;

            }
        }

        if (!isDuplicate) {

            uniqueArrays.push(parsed);

        }
    }

    uniqueArrays.sort((a, b) => a.length - b.length);

    for (let arr of uniqueArrays) {

        console.log(`[${arr.join(', ')}]`);

    }

    function arraysAreEqual(a, b) {

        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; i++) {

            if (a[i] !== b[i]) return false;

        }

        return true;

    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
sequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);