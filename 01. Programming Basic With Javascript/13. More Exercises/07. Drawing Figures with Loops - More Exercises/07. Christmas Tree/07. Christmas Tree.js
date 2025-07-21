function christmasTree(n) {

    let print = ' ';
    let intervals = '';
    let stars = '';

    for (let i = 0; i <= n; i++) {

        for (let j = 0; j <= n - i; j++) {

            intervals += ' ';

        }

        if (i >= 1) {

            stars += '*';

        }

        if (i === 0) {

            print = intervals + ' | ';

        } else {

            print = intervals + stars + ' | ' + stars;

        }

        console.log(print);
        print = '';
        intervals = '';

    }
}
christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);