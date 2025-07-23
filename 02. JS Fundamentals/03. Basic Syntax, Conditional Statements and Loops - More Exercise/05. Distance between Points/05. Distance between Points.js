function distanceBetweenPoint(x1, y1, x2, y2) {

    let distance = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    console.log(distance);

}
distanceBetweenPoint(2, 4, 5, 0);
distanceBetweenPoint(2.34, 15.66, -13.55, -2.9985);



function distanceBetweenPoint(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log(distance);
}
distanceBetweenPoint(2, 4, 5, 0);
distanceBetweenPoint(2.34, 15.66, -13.55, -2.9985);