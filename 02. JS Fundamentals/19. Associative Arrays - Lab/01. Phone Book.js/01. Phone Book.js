function phoneBook(arr) {

    let obj = {};

    for (let i of arr) {

        let token = i.split(' ');
        let nameOfPeople = token[0];
        let phoneNumber = token[1];
        obj[nameOfPeople] = phoneNumber;

    }

    for (let key in obj) {

        console.log(`${key} -> ${obj[key]}`);

    }
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
phoneBook(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);