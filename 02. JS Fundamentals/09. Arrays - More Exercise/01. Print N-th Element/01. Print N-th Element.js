function printNthEleemnt(arr) {

    let step = Number(arr.pop());
    let newArray = [];

    for (let i = 0; i < arr.length; i += step) {

        newArray.push(arr[i]);

    }

    console.log(newArray.join(' '));

}
printNthEleemnt(['5', '20', '31', '4', '20', '2']);
printNthEleemnt(['dsa', 'asd', 'test', 'test', '2']);
printNthEleemnt(['1', '2', '3', '4', '5', '6']);