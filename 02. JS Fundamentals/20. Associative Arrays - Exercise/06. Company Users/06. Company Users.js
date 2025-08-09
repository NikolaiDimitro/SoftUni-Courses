function componyUsers(arr) {

    let map = new Map();

    for (let line of arr) {

        let set = new Set();
        let [compony, user] = line.split(' -> ');

        if (!map.has(compony)) {

            set.add(user);
            map.set(compony, set);

        } else if (map.has(compony) && !map.get(compony).has(user)) {

            map.get(compony).add(user);

        }
    }

    let entries = Array.from(map.entries());
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let compony of entries) {

        console.log(compony[0]);

        for (let user of compony[1]) {

            console.log((`-- ${user}`));

        }
    }
}
componyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);
componyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']);