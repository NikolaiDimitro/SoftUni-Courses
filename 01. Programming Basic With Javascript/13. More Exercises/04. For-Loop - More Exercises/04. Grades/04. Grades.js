function grades(grades) {

    let totalGrades = 0;
    let countTwo = 0;
    let countThree = 0;
    let countFour = 0;
    let countTopGrades = 0;
    let totalStudents = Number(grades[0]);

    for (let i = 1; i <= totalStudents; i++) {

        let current = Number(grades[i]);

        totalGrades += current;

        if (current <= 2.99) {

            countTwo++;

        } else if (current <= 3.99) {

            countThree++;

        } else if (current <= 4.99) {

            countFour++;

        } else {

            countTopGrades++;

        }
    }

    console.log(`Top students: ${((countTopGrades / Number(grades[0])) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((countFour / Number(grades[0])) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((countThree / Number(grades[0])) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((countTwo / totalStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${((totalGrades / Number(grades[0])).toFixed(2))}`);

}
grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
// grades(["6", "2", "3", "4", "5", "6", "2.2"]);