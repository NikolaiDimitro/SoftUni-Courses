function activationKes(arr) {

    let key = arr.shift();
    let index = 0;

    while (arr[index] !== 'Generate') {

        let current = arr[index];

        if (current.includes('Contains')) {

            let [command, substring] = current.split('>>>');

            if (key.includes(substring)) {

                console.log(`${key} contains ${substring}`);

            } else {

                console.log(`Substring not found!`);

            }

        } else if (current.includes('Flip')) {

            let [command, lowerUpper, startIndex, endIndex] = current.split('>>>');

            let first = key.substring(0, Number(startIndex));
            let second = key.substring(Number(startIndex), Number(endIndex));
            let third = key.substring(Number(endIndex));

            if (lowerUpper === 'Lower') {

                second = second.toLowerCase();

            } else {

                second = second.toUpperCase();

            }

            key = first + second + third;
            console.log(key);

        } else if (current.includes('Slice')) {

            let [command, startIndex, endIndex] = current.split('>>>');

            let first = key.substring(0, startIndex);
            let second = key.substring(endIndex);
            key = first + second;
            console.log(key);

        }

        index++;

    }

    console.log(`Your activation key is: ${key}`);

}
activationKes((["abcdefghijklmnopqrstuvwxyz", "Slice>>>2>>>6", "Flip>>>Upper>>>3>>>14", "Flip>>>Lower>>>5>>>7", "Contains>>>def", "Contains>>>deF", "Generate"]));
activationKes((["134softsf5ftuni2020rockz42", "Slice>>>3>>>7", "Contains>>>-rock", "Contains>>>-uni-", "Contains>>>-rocks", "Flip>>>Upper>>>2>>>8", "Flip>>>Lower>>>5>>>11", "Generate"]));