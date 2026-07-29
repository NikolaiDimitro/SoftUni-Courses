function repainting(countNylon, countPaint, countThinner, countWorkingHours) {

    let materialsPrice = (countNylon + 2) * 1.5 + (countPaint * 1.1) * 14.5 + countThinner * 5 + 0.4;
    let priceForWork = (materialsPrice * 0.3) * countWorkingHours;

    console.log(materialsPrice + priceForWork)

}
repainting(10, 11, 4, 8);
repainting(5, 10, 10, 1);