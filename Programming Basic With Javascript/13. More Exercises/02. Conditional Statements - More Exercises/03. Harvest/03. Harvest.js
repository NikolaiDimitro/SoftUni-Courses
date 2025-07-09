function harvest(squareMeters, grapesPerSquareMeter, needCountWine, countWorkers) {

    let harvest = (squareMeters * grapesPerSquareMeter) * 0.4;
    let oneLitreWine = harvest / 2.5;

    if (oneLitreWine < needCountWine) {

        console.log(`It will be a tough winter! More ${Math.floor(needCountWine - oneLitreWine)} liters wine needed.`);

    } else {

        console.log(`Good harvest this year! Total wine: ${Math.floor(oneLitreWine)} liters.`);
        console.log(`${Math.ceil(oneLitreWine - needCountWine)} liters left -> ${Math.ceil((oneLitreWine - needCountWine) / countWorkers)} liters per person.`);

    }
}
harvest(650, 2, 175, 3);
harvest(1020, 1.5, 425, 4);