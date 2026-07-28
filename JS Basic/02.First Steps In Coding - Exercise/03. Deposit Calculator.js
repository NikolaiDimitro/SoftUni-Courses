function depositCalculator(deposit, time, yearlyInterestRate) {

    console.log(deposit + time * ((deposit * (yearlyInterestRate / 100)) / 12));

}
depositCalculator(200, 3, 5.7);
depositCalculator(2350, 6, 7);