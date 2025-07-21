function fishTank(length, width, height, percent) {

    console.log(((length * width * height) / 1000) * (1 - percent / 100));

}
fishTank(85, 75, 47, 17);
fishTank(105, 77, 89, 18.5);