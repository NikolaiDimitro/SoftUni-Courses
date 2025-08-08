function schoolGrades(arr) {

    let map = new Map();

    for (let student of arr) {

        let [name, ...grades] = student.split(' ');

        if (!map.has(name)) {

            map.set(name, grades);

        } else {

            let currrent = map.get(name);

            for (let grade of grades) {

                currrent.push(grade);

            }

            map.set(name, currrent);

        }
    }

    for (let student of map) {

        let sum = 0;
        let count = 0;

        for (let grade of student[1]) {

            sum += Number(grade);
            count++;

        }

        let averageGrade = (sum / count).toFixed(2);
        map.set(student[0], averageGrade);

    }

    let sorted = new Map([...map].sort((a, b) => a[0].localeCompare(b[0])));

    for (let student of sorted) {

        console.log(`${student[0]}: ${student[1]}`);

    }
}
schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);