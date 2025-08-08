function addressBook(arr) {

    let obj = {};

    for (let i of arr) {

        let current = i.split(':');

        if (!obj.hasOwnProperty(current[0])) {

            obj[current[0]] = current[1];

        } else {

            obj[current[0]] = current[1];

        }
    }

    let entries = Object.entries(obj);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let name in entries) {

        console.log(`${entries[name][0]} -> ${entries[name][1]}`);

    }
}
addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd', 'John:Milwaukee Crossing', 'Peter:Fordem Ave', 'Bob:Redwing Ave', 'George:Mesta Crossing', 'Ted:Gateway Way', 'Bill:Gateway Way', 'John:Grover Rd', 'Peter:Huxley Rd', 'Jeff:Gateway Way', 'Jeff:Huxley Rd']);