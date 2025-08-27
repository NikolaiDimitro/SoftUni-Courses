function shootForTheWin(arr) {

    let targets = arr.shift().split(' ').map(x => Number(x));
    let newArr = [];
    let index = 0;
    let count = 0;

    while (arr[index] !== 'End') {

        let current = Number(arr[index]);

        if (current >= targets.length || current < 0) {

            index++;
            continue;

        }

        for (let i = 0; i < targets.length; i++) {

            if (i === current) {

                continue;

            }

            if (targets[current] >= targets[i] && !newArr.includes(current) && !newArr.includes(i)) {

                targets[i] += targets[current];

            } else if (targets[current] < targets[i] && !newArr.includes(current)) {

                targets[i] -= targets[current];

            }
        }

        count++;
        targets[current] = -1;
        newArr.push(current);
        index++;

    }

    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);

}
shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForTheWin((["30 30 12 60 54 66", "5", "2", "4", "0", "End"]));