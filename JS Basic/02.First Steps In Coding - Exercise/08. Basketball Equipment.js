function basketballEquipment(annualFee) {

    let basketballSneakers = annualFee * 0.6;
    let basketballUniform = basketballSneakers * 0.8;
    let basketballBall = basketballUniform / 4;
    let basketballAccessories = basketballBall / 5;

    console.log(annualFee + basketballSneakers + basketballUniform + basketballBall + basketballAccessories);

}
basketballEquipment(365);
basketballEquipment(550);