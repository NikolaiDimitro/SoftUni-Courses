function cinema(typeProjection, row, col) {

    if (typeProjection === 'Premiere') {

        console.log(`${(row * col * 12).toFixed(2)} leva`);

    } else if (typeProjection === 'Normal') {

        console.log(`${(row * col * 7.5).toFixed(2)} leva`);

    } else {

        console.log(`${(row * col * 5).toFixed(2)} leva`);

    }
}
cinema("Premiere", 10, 12);
cinema("Normal", 21, 13);
cinema("Discount", 12, 30);