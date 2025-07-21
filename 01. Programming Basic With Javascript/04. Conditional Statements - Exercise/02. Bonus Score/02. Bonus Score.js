function bonusScore(countPoints) {

    let bonus = 0;

    if (countPoints <= 100) {

        bonus += 5;

    } else if (countPoints <= 1000) {

        bonus += countPoints * 0.2;

    } else {

        bonus += countPoints * 0.1;

    }

    if (countPoints % 2 === 0) {

        bonus += 1;

    } else if (countPoints % 10 === 5) {

        bonus += 2;

    }

    console.log(bonus);
    console.log(countPoints + bonus);

}
bonusScore(20);
bonusScore(175);
bonusScore(2703);
bonusScore(15875);