function moving(arr) {

    let index = 3;
    let size = Number(arr[0]) * Number(arr[1]) * Number(arr[2]);

    while (arr[index] !== 'Done') {

        let box = Number(arr[index]);

        size -= box;

        if (size <= 0) {

            console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`);
            break;

        }

        index++;

    }

    if (size >= 0) {

        console.log(`${size} Cubic meters left.`);

    }
}
moving((["10", "10", "2", "20", "20", "20", "20", "122"]));
moving((["10", "1", "2", "4", "6", "Done"]));