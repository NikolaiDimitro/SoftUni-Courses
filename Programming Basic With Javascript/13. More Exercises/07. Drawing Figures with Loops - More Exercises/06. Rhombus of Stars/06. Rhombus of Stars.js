function rhombusOfStars(n) {

    for (let row = 1; row <= n; row++) {

        let spaces = ' '.repeat(n - row);
        let stars = '';

        for (let i = 1; i <= row; i++) {

            stars += '*';

            if (i !== row) {

                stars += ' ';

            }
        }

        console.log(spaces + stars);

    }

    for (let row = n - 1; row >= 1; row--) {

        let spaces = ' '.repeat(n - row);
        let stars = '';

        for (let i = 1; i <= row; i++) {

            stars += '*';

            if (i !== row) {

                stars += ' ';

            }
        }

        console.log(spaces + stars);

    }
}
rhombusOfStars(1);
rhombusOfStars(2);
rhombusOfStars(3);
rhombusOfStars(4);