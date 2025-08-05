function catalogue(arr) {

    let obj = {};
    let oldLetter = '';

    arr.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i].split(' : ');
        let firstLetter = current[0][0];
        obj[current[0]] = Number(current[1]);

        if (i === 0) {

            console.log(firstLetter);
            oldLetter = firstLetter;

        }

        if (firstLetter !== oldLetter) {

            console.log(firstLetter);
            oldLetter = firstLetter;

        }

        let entries = Object.entries(obj)
        console.log(`  ${entries[i][0]}: ${entries[i][1]}`);

    }
}
catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);
catalogue(['Omlet : 5.4', 'Shirt : 15', 'Cake : 59']);