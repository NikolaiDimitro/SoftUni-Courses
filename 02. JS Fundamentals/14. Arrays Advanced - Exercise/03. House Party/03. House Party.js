function houseParty(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' ');

        if (current[2] === 'going!') {

            if (newArray.includes(current[0]) === false) {

                newArray.push(current[0]);

            } else {

                console.log(`${current[0]} is already in the list!`);

            }

        } else {

            if (newArray.includes(current[0])) {

                let index = newArray.indexOf(current[0]);
                newArray.splice(index, 1);

            } else {

                console.log(`${current[0]} is not in the list!`);

            }
        }
    }

    console.log(newArray.join('\n'));

}
houseParty(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']);
houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!']);