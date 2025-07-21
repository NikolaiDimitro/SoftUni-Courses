function building(arr) {

    let floors = arr[0];
    let rooms = arr[1];

    for (let i = floors; i >= 1; i--) {

        let stack = '';

        for (let j = 0; j < rooms; j++) {

            if (i === floors) {

                stack += `L${i}${j} `;

            } else if (i % 2 !== 0) {

                stack += `A${i}${j} `;

            } else {

                stack += `O${i}${j} `;

            }
        }

        console.log(stack);

    }
}
building([6, 4]);
building([9, 5]);
building([4, 4]);