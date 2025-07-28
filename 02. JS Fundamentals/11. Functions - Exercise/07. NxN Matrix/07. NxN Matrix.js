function nxnMatrix(n) {

    let print = '';

    column(n, print);
    row(column(n, print), n);

    function column(n, print) {

        for (let i = 0; i < n; i++) {

            print += ' ' + n + '';

        }

        return print;

    }

    function row(print, n) {

        for (let i = 0; i < n; i++) {

            console.log(print);

        }
    }
}
nxnMatrix(3);
nxnMatrix(7);
nxnMatrix(2);