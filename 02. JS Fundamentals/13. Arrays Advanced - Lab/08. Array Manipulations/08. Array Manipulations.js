function arrayManipulations(arr) {

    let arrayForManipulations = [];
    let str = arr.shift().split(' ');

    for (let i = 0; i < str.length; i++) {

        let current = Number(str[i]);
        arrayForManipulations.push(current);

    }

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' ');

        if (current[0] === 'Add') {

            arrayForManipulations.push(Number(current[1]));

        } else if (current[0] === 'Remove') {

            for (let j = 0; j < arrayForManipulations.length; j++) {

                if (arrayForManipulations[j] === Number(current[1])) {

                    arrayForManipulations.splice(j, 1);

                }
            }

        } else if (current[0] === 'RemoveAt') {

            arrayForManipulations.splice(Number(current[1]), 1);

        } else if (current[0] === 'Insert') {

            arrayForManipulations.splice(Number(current[2]), 0, Number(current[1]));

        }
    }

    console.log(arrayForManipulations.join(' '));

}
arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);