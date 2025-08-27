function numbers(str) {

    str = str.split(' ').map(x => Number(x));
    let total = 0;
    let average = 0;
    let newArray = [];

    for (let numb of str) {

        total += numb;

    }

    average = total / str.length;

    for (let numb of str) {

        if (numb > average) {

            newArray.push(numb);

        }
    }


    let sort = newArray.sort((a, b) => b - a);
    sort = newArray.slice(0, 5);

    if (sort.length > 0) {

        console.log(sort.join(' '));

    } else {

        console.log('No');

    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');