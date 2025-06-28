function basketballEquipment(taxePrice) {

    let kecove = taxePrice * 0.6;
    let ekip = kecove * 0.8;
    let topka = ekip * 1 / 4;
    let aksesoari = topka * 1 / 5;

    console.log(kecove + ekip + topka + aksesoari + taxePrice);

}
basketballEquipment(365);
basketballEquipment(550);