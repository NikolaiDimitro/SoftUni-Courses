function buildAWall(arr) {

    let newArray = [];
    let count = 0;
    let sum = 0;
    let totalPrice = 0;
    let current = 0;

    for (let i = 0; i < 30; i++) {

        for (let j = 0; j < arr.length; j++) {

            current = arr[j];

            if (current < 30) {

                current++;
                count += 1;
                arr[j] = arr[j] + 1;

            }
        }

        sum = count * 195;
        totalPrice += sum * 1900;

        if (count !== 0) {

            newArray.push(sum);
            count = 0;

        }
    }

    console.log(newArray.join(', '));
    console.log(`${totalPrice} pesos`);

}
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);