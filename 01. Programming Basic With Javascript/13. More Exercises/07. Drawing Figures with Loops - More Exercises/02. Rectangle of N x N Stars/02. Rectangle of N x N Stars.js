function rectangleOfNXNStars(n) {

    let print = '';

    for (let row = 1; row <= n; row++) {

        for (let columns = 1; columns <= n; columns++) {

            print += '*';

        }

        console.log(print);
        print = '';

    }
}
rectangleOfNXNStars(2);
rectangleOfNXNStars(3);
rectangleOfNXNStars(4);