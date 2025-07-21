function graduation(arr) {

    let index = 1;
    let countExcluded = 0;
    let count = 0;
    let total = 0;

    while (index <= arr.length - 1) {

        let grade = Number(arr[index]);

        if (grade < 4) {

            countExcluded += 1;

        } else {

            count += 1;

        }

        total += grade;

        if (countExcluded > 1) {

            console.log(`${arr[0]} has been excluded at ${count + 1} grade`);
            break;

        }

        index++;

    }

    if (countExcluded < 2) {

        console.log(`${arr[0]} graduated. Average grade: ${(total / 12).toFixed(2)}`);

    }
}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);