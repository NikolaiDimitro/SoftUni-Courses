function ladybugs(arr) {
    let sizeOfField = Number(arr[0]);
    let ladybugsStartIndex = arr[1].split(' ').map(Number);
    let field = new Array(sizeOfField).fill(0);

    for (let index of ladybugsStartIndex) {

        if (index >= 0 && index < sizeOfField) {

            field[index] = 1;

        }
    }

    for (let i = 2; i < arr.length; i++) {

        let [ladyBugIndex, direction, flyLengthRaw] = arr[i].split(' ');
        let ladyBug = Number(ladyBugIndex);
        let flyLength = Number(flyLengthRaw);

        if (ladyBug < 0 || ladyBug >= sizeOfField || field[ladyBug] !== 1) {

            continue;

        }

        if (flyLength < 0) {

            flyLength = Math.abs(flyLength);
            direction = direction === 'right' ? 'left' : 'right';

        }

        field[ladyBug] = 0;
        let position = ladyBug;

        while (true) {

            position = direction === 'right' ? position + flyLength : position - flyLength;

            if (position < 0 || position >= sizeOfField) {

                break;

            }

            if (field[position] === 0) {

                field[position] = 1;
                break;

            }
        }
    }

    console.log(field.join(' '));
}
ladybugs([3, '0 1', '0 right 1', '2 right 1']);
ladybugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladybugs([5, '3', '3 left 2', '1 left -2']);