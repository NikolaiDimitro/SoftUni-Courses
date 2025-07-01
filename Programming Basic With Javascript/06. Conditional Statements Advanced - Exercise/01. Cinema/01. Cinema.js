function cinema(proprojections, rows, columns) {

    if (proprojections === 'Premiere') {

        console.log(`${(rows * columns * 12).toFixed(2)} leva`);

    } else if (proprojections === 'Normal') {

        console.log(`${(rows * columns * 7.5).toFixed(2)} leva`);

    } else {

        console.log(`${(rows * columns * 5).toFixed(2)} leva`);

    }
}
cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);