function addAndRemove(arr) {

    let startNumber = 0;
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];

        if (current === 'add') {

            startNumber++;
            newArray.push(startNumber);

        } else {

            startNumber++;
            newArray.pop();

        }

    }

    if (newArray.length === 0) {

        console.log('Empty');

    } else {

        console.log(newArray.join(' '));

    }
}
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);