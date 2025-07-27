function rotateArray(arr) {

    let countRotation = Number(arr.pop());

    for (let i = 0; i < countRotation; i++) {

        let lastArrIndex = arr.pop();
        arr.unshift(lastArrIndex);

    }

    console.log(arr.join(' '));

}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);