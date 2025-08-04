function emplotees(arr) {

    let obj = {};

    for (let i of arr) {

        obj.name = i;
        obj.number = i.length;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);

    }
}
emplotees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
emplotees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);