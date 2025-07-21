function tennisEquipment(priceForOneTennisRacket, countTennisRacket, countPairsOfSneakers) {

    let priceToAllTennisRacket = priceForOneTennisRacket * countTennisRacket;
    let priceToOnePairSneakers = priceForOneTennisRacket * 1 / 6;
    let priceToAllPairOfSneakers = priceToOnePairSneakers * countPairsOfSneakers;
    let otherEquipment = (priceToAllPairOfSneakers + priceToAllTennisRacket) * 0.2;
    let total = priceToAllPairOfSneakers + priceToAllTennisRacket + otherEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(total * 1 / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(total * 7 / 8)}`);

}
tennisEquipment(850, 4, 2);
tennisEquipment(386, 7, 4);