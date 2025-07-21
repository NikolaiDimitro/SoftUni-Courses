function squareOfStars(n) {

    let print = '';

    for (let rows = 1; rows <= n; rows++) {

        for (let columns = 1; columns <= n; columns++) {

            print += '* ';

        }

        console.log(print);
        print = '';

    }
}
squareOfStars(2);
squareOfStars(3);
squareOfStars(4);