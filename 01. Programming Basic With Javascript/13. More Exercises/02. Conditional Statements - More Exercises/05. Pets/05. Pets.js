function pets(countDays, foodLefttBehind, kiloFoodForDayOfDog, kiloFoodForDayOfCat, kiloFoodForDayOfTurtle) {

    let totalFood = countDays * (kiloFoodForDayOfDog + kiloFoodForDayOfCat + (kiloFoodForDayOfTurtle / 1000));

    console.log(totalFood <= foodLefttBehind ? `${Math.floor(foodLefttBehind - totalFood)} kilos of food left.` : `${Math.ceil(totalFood - foodLefttBehind)} more kilos of food are needed.`);

}
pets(2, 10, 1, 1, 1200,);
pets(5, 10, 2.1, 0.8, 321,);