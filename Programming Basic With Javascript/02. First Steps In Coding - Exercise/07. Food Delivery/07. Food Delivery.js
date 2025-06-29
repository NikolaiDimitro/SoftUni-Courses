function foodDelivery(countChickenMenu, countFishMenu, countVeganMenu) {

    let witoputDesertt = countChickenMenu * 10.35 + countFishMenu * 12.40 + countVeganMenu * 8.15;
    console.log(witoputDesertt + (witoputDesertt * 0.2) + 2.5);

}
foodDelivery(2, 4, 3);
foodDelivery(9, 2, 6);