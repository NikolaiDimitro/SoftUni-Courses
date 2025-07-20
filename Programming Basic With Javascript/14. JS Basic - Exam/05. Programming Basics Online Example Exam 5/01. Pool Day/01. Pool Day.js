function poolDay(countPeople, entranceFee, priceOneSunLounger, priceOneUmbrella) {

    console.log(`${((countPeople * entranceFee) + (Math.ceil(countPeople * 0.75) * priceOneSunLounger) + (Math.ceil(countPeople / 2) * priceOneUmbrella)).toFixed(2)} lv.`);

}
poolDay(21, 5.50, 4.40, 6.20);
poolDay(50, 6, 8, 4);
poolDay(100, 8, 6, 4);