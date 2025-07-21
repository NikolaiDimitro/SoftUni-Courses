function trainTheTrainers(arr) {

    let countJury = Number(arr[0]);
    let nameOfPresentation = arr[1];
    let summ = 0;
    let totalSum = 0
    let count = 0;
    let index = 2;

    while (arr[index] !== 'Finish') {

        for (let i = 0; i < countJury; i++) {

            let grade = Number(arr[index]);
            summ += grade;
            index++;

        }

        console.log(`${nameOfPresentation} - ${(summ / countJury).toFixed(2)}.`);
        totalSum += summ / countJury;
        count++;
        summ = 0;
        nameOfPresentation = arr[index];

        if (arr[index] === 'Finish') {

            console.log(`Student's final assessment is ${(totalSum / count).toFixed(2)}.`);
            break;

        }

        index++;

    }
}
trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);