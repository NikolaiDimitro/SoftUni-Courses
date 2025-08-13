function deserializeString(arr) {

    let index = 0;
    let newArr = [];
    let map = new Map();

    while (arr[index] !== 'end') {

        let current = arr[index];

        let [letter, letterIndexs] = current.split(':');
        letterIndexs = letterIndexs.split('/');

        for (let indexs of letterIndexs) {

            newArr.push(Number(indexs));

        }

        map.set(letter, letterIndexs);

        index++;

    }

    let str = '';
    newArr.sort((a, b) => a - b);

    for (let i = 0; i < newArr.length; i++) {

        let index = newArr[i];

        for (let letterArr of map) {

            for (let letter of letterArr[1]) {

                letter = Number(letter);

                if (letter === index) {

                    str += letterArr[0];

                }
            }
        }
    }

    console.log(str);

}
deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
deserializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);