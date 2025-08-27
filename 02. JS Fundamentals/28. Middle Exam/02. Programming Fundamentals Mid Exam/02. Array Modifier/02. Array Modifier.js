function arrayModifier(arr) {

    let str = arr.shift().split(' ').map(x => Number(x));
    let index = 0;

    while (arr[index] !== 'end') {

        let current = arr[index];

        if (current.includes('swap')) {

            let [command, first, second] = current.split(' ');

            let firstNumb = str[first];
            let secondNumb = str[second];
            let third = firstNumb;

            str[first] = secondNumb;
            str[second] = third;

        } else if (current.includes('multiply')) {

            let [command, first, second] = current.split(' ');

            let firstNumb = str[first];
            let secondNumb = str[second];
            str[first] = firstNumb * secondNumb;

        } else {

            for (let i = 0; i < str.length; i++) {

                str[i] -= 1;

            }
        }

        index++;

    }

    console.log(str.join(', '));

}
arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']);
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end']);