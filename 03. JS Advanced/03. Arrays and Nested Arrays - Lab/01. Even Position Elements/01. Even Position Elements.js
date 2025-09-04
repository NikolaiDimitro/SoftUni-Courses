function evenPositionElements(arr) {

    let newArr = [];

    arr.forEach(function (x, index) {

        if (index % 2 === 0) {

            newArr.push(arr[index]);

        }
    })

    console.log(newArr.join(' '));

}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);