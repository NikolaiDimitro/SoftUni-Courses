function examPreparation(arr) {

    let index = 1;
    let unsatisfactoryGrades = arr[0];
    let countOfUnsatisfactoryGrades = 0;
    let count = 0;
    let total = 0;

    while (arr[index] !== 'Enough') {

        if (Number(arr[index + 1]) <= 4) {

            countOfUnsatisfactoryGrades += 1;

        }

        if (countOfUnsatisfactoryGrades >= unsatisfactoryGrades) {

            console.log(`You need a break, ${unsatisfactoryGrades} poor grades.`);

            break;

        }

        count += 1;
        total += Number(arr[index + 1]);

        index += 2;

        if (arr[index] === 'Enough') {

            console.log(`Average score: ${(total / count).toFixed(2)} `);
            console.log(`Number of problems: ${count}`);
            console.log(`Last problem: ${arr[index - 2]}`);

            break;

        }
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);