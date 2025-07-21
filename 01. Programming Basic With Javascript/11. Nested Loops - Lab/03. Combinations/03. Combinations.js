function combination(numb) {

    let count = 0;

    for (let i = 0; i <= 25; i++) {

        for (let j = 0; j <= 25; j++) {

            for (let k = 0; k <= 25; k++) {

                if ((i + j + k) !== numb) {

                    continue;

                } else {

                    count++;

                }
            }
        }
    }

    console.log(count);

}
combination(25);
combination(20);
combination(5);