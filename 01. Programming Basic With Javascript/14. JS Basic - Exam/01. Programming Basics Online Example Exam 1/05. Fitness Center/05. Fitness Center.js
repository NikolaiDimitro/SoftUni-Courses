function fitnessCenter(arr) {

    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countProteinShake = 0;
    let countProteinBar = 0;
    let countPeopleWhoWorkOut = 0;
    let countPeopleWhoBuy = 0;

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];

        if (current === 'Back') {

            countBack++;
            countPeopleWhoWorkOut++;

        } else if (current === 'Chest') {

            countChest++;
            countPeopleWhoWorkOut++;

        } else if (current === 'Legs') {

            countLegs++;
            countPeopleWhoWorkOut++;

        } else if (current === 'Abs') {

            countAbs++;
            countPeopleWhoWorkOut++;

        } else if (current === 'Protein shake') {

            countProteinShake++;
            countPeopleWhoBuy++;

        } else if (current === 'Protein bar') {

            countProteinBar++;
            countPeopleWhoBuy++;

        }
    }

    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countProteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);
    console.log(`${((countPeopleWhoWorkOut / Number(arr[0])) * 100).toFixed(2)}% - work out`);
    console.log(`${((countPeopleWhoBuy / Number(arr[0])) * 100).toFixed(2)}% - protein`);

}
fitnessCenter(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"]);
fitnessCenter(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"]);