function basketballEquipment(theAnnualBasketballTrainingFee) {

    let sneakers = theAnnualBasketballTrainingFee * 0.6;
    let team = sneakers * 0.8;
    let ball = team * 1 / 4;
    let accessories = ball * 1 / 5;

    console.log((sneakers + team + ball + accessories + theAnnualBasketballTrainingFee).toFixed(2));

}
basketballEquipment(320);
basketballEquipment(550);
basketballEquipment(230);