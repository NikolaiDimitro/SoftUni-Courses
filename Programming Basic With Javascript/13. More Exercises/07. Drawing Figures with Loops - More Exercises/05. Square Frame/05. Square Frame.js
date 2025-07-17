function squareFrame(n) {

    let print = '+ ';

    for (let i = 1; i <= n - 2; i++) {

        print += `- `;

    }
    print += '+';
    console.log(print);

    for (let i = 1; i <= n - 2; i++) {

        print = '| ';

        for (let j = 1; j <= n - 2; j++) {

            print += '- ';

        }

        print += '|';
        console.log(print);
        print = '';

    }

    print = '+ ';

    for (let i = 1; i <= n - 2; i++) {

        print += `- `;

    }
    print += '+';
    console.log(print)

}
squareFrame(3);
squareFrame(4);
squareFrame(5);
squareFrame(6);