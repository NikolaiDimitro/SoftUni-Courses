function cake(arr) {

    let index = 2;
    let size = Number(arr[0]) * Number(arr[1]);

    while (arr[index] !== 'STOP') {

        let partOfCake = Number(arr[index]);
        size -= partOfCake;

        if (size <= 0) {

            console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`);
            break;

        }

        index++;

        if (arr[index] === 'STOP') {

            console.log(`${Math.abs(size)} pieces are left.`);

        }
    }
}
cake((["10", "10", "20", "20", "20", "20", "21"]));
cake((["10", "2", "2", "4", "6", "STOP"]));