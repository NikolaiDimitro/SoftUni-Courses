function trainingLab(w, h) {

    let widthOfRoom = h * 100;
    widthOfRoom -= 100;
    let placesInOneRow = Math.floor(widthOfRoom / 70);

    let lenthOfRoom = w * 100;
    let countRows = Math.floor(lenthOfRoom / 120);

    let totoalPlaces = placesInOneRow * countRows - 3;

    console.log(totoalPlaces);

}
trainingLab(15, 8.9);
trainingLab(8.4, 5.2);