function movingTarget(arr) {

    let targets = arr.shift().split(' ').map(x => Number(x));
    let indexs = 0;

    while (arr[indexs] !== 'End') {

        let current = arr[indexs];

        if (current.includes('Shoot')) {

            let [command, index, power] = current.split(' ');

            index = Number(index);
            power = Number(power);

            if (index >= 0 && index < targets.length) {

                targets[index] -= power;

                if (targets[index] <= 0) {

                    targets.splice(index, 1);

                }
            }

        } else if (current.includes('Add')) {

            let [command, index, value] = current.split(' ');

            index = Number(index);
            value = Number(value);

            if (index >= 0 && index < targets.length) {

                targets.splice(index, 0, value);

            } else {

                console.log('Invalid placement!');

            }

        } else if (current.includes('Strike')) {

            let [command, index, radius] = current.split(' ');

            index = Number(index);
            radius = Number(radius);

            if (index - radius >= 0 && index + radius < targets.length) {

                targets.splice(index - radius, radius * 2 + 1);

            } else {

                console.log('Strike missed!');

            }
        }

        indexs++;

    }

    console.log(targets.join('|'));

}
movingTarget((["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]));
movingTarget((["1 2 3 4 5", "Strike 0 1", "End"]));