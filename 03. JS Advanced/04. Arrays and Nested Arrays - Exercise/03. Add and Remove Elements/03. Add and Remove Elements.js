function addAndRemvoeElements(arr) {

    let numb = 1;
    let newArr = [];

    for (let command of arr) {


        if (command === 'add') {

            newArr.push(numb);

        } else {

            newArr.pop();

        }

        numb++;

    }

    if (newArr.length > 0) {

        for (let numb of newArr) {

            console.log(numb);

        }

    } else {

        console.log('Empty');

    }
}
addAndRemvoeElements(['add', 'add', 'add', 'add']);
addAndRemvoeElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemvoeElements(['remove', 'remove', 'remove']);