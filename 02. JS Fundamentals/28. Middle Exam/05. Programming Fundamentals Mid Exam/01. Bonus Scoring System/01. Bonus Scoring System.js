function bonusScoringSystem(arr) {

    let countStudnets = Number(arr.shift());
    let lectures = Number(arr.shift());
    let otherBonus = Number(arr.shift());
    let maxBonus = 0;
    let student = 0;

    for (let i = 0; i < countStudnets; i++) {

        let current = Number(arr[i]);
        let bonus = current / lectures * (5 + otherBonus);

        if (bonus > maxBonus) {

            maxBonus = bonus;
            student = current;

        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${student} lectures.`);

}
bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);