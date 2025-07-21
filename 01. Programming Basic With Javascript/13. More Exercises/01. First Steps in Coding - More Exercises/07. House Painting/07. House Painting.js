function housePaibting(heightOfHouse, lengthOfSideWall, heightOfTriangularWallOfTheRoof) {

    let areaOfFrontWall = (heightOfHouse * heightOfHouse) - (2 * 1.2);
    let areaOfBackWall = heightOfHouse * heightOfHouse;
    let areaOfSideWalls = ((heightOfHouse * lengthOfSideWall) - (1.5 * 1.5)) * 2;

    let sideWallsOfRoof = 2 * (heightOfHouse * lengthOfSideWall);
    let triangularWallsOfRoof = 2 * (heightOfHouse * heightOfTriangularWallOfTheRoof / 2);
    let litersOfGreenPain = (areaOfFrontWall + areaOfBackWall + areaOfSideWalls) / 3.4;
    let litersOfRedPain = (sideWallsOfRoof + triangularWallsOfRoof) / 4.3;

    console.log(litersOfGreenPain.toFixed(2));
    console.log(litersOfRedPain.toFixed(2));

}
housePaibting(6, 10, 5.2,);
housePaibting(10.25, 15.45, 8.88)