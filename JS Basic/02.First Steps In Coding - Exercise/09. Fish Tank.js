function fishTank(lenght, width, height, percent) {

    console.log((lenght * width * height * 0.001) * (1 - percent / 100));

}
fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);