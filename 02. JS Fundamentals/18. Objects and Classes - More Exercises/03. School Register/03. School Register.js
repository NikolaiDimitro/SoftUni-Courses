function schoolRegister(arr) {

    let newArray = [];

    for (let i of arr) {

        i = i.split(': ');

        for (let current = 1; current < i.length; current++) {

            if (i[current].includes(', ') || current === i.length - 1) {

                i[current] = i[current].split(', ');

            }
        }

        i.splice(0, 1);
        let obj = {};

        for (let j = 0; j < i.length; j++) {

            let nameOrNumb = i[j][0];

            if (j === 0) {

                obj['name'] = nameOrNumb;

            } else if (j === 1) {

                obj['class'] = Number(nameOrNumb) + 1;

            } else if (j === 2) {

                obj['grade'] = Number(nameOrNumb);

            }
        }

        newArray.push(obj)
        obj = {};

    }

    let withoutThree = newArray.filter(x => x.grade > 3);
    withoutThree.sort((a, b) => a.class - b.class);

    let eachClasses = 0;
    let oldClass = 0;
    let grade = 0;
    let totalGrade = 0;
    let count = 0;
    let arrWithName = [];
    let arrWithGrades = [];

    for (let i = 0; i < withoutThree.length; i++) {

        eachClasses = withoutThree[i].class;
        grade = withoutThree[i].grade;

        if (i === 0) {

            oldClass = eachClasses;

        }

        if (oldClass === eachClasses) {

            arrWithName.push(withoutThree[i].name);
            totalGrade += grade;
            count++;

        } else {

            console.log(`${oldClass} Grade`);
            console.log(`List of students: ${arrWithName.join(', ')}`);
            console.log(`Average annual score from last year: ${(totalGrade / count).toFixed(2)}`);
            console.log('');

            arrWithName = [];
            totalGrade = 0;
            count = 0;

            eachClasses = withoutThree[i].class;
            oldClass = eachClasses;
            grade = withoutThree[i].grade;

            arrWithName.push(withoutThree[i].name);
            totalGrade += grade;
            count++;

        }
    }

    console.log(`${oldClass} Grade`);
    console.log(`List of students: ${arrWithName.join(', ')}`);
    console.log(`Average annual score from last year: ${(totalGrade / count).toFixed(2)}`);
    console.log('');

}
schoolRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
schoolRegister(['Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);