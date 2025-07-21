function diamond(n) {

    let middle = Math.floor((n + 1) / 2);

    for (let row = 1; row <= middle; row++) {

        let leftRight = Math.floor((n - (row - 1) * 2 - 1) / 2);
        let mid = n - 2 * leftRight - 2;
        let line = '';

        for (let i = 1; i <= leftRight; i++) {

            line += '-';

        }

        line += '*';

        if (mid >= 0) {

            for (let i = 1; i <= mid; i++) {

                line += '-';

            }

            line += '*';

        }

        for (let i = 1; i <= leftRight; i++) {

            line += '-';

        }

        console.log(line);

    }

    for (let row = middle - 1; row >= 1; row--) {

        let leftRight = Math.floor((n - (row - 1) * 2 - 1) / 2);
        let mid = n - 2 * leftRight - 2;
        let line = '';

        for (let i = 1; i <= leftRight; i++) {

            line += '-';

        }

        line += '*';

        if (mid >= 0) {

            for (let i = 1; i <= mid; i++) {

                line += '-';

            }

            line += '*';

        }

        for (let i = 1; i <= leftRight; i++) {

            line += '-';

        }

        console.log(line);

    }
}
diamond(1);
diamond(2);
diamond(3);
diamond(4);
diamond(5);
diamond(6);
diamond(7);
diamond(8);
diamond(9);