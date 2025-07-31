function train(arr) {

    let wagon = arr.shift().split(' ').map(x => Number(x));
    let maxPassangers = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' ');

        if (current[0] === 'Add') {

            wagon.push(Number(current[1]));

        } else {

            for (let i = 0; i < wagon.length; i++) {

                let countPassangers = Number(current[0]);

                if (maxPassangers - wagon[i] >= countPassangers) {

                    wagon[i] += countPassangers;
                    break;

                }
            }
        }
    }

    console.log(wagon.join(' '));

}
train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);