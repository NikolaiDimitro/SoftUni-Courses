function depositCalculator(depositSum, months, yearPercent) {

    console.log(depositSum + months * ((depositSum * yearPercent / 100) / 12));

}
depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);