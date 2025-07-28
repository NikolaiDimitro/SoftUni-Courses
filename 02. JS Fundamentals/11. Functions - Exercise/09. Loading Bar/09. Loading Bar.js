function loadingBar(n) {

    let print = '[';

    completedPercent(n, print);

    function completedPercent(n, print) {

        for (let i = 0; i < n; i += 10) {

            print += '%';

        }

        remainingPercents(n, print);

    }

    function remainingPercents(n, print) {

        for (let i = n; i < 100; i += 10) {

            print += '.';

        }

        print += ']';

        if (n === 100) {

            console.log('100% Complete!');
            console.log(print);

        } else {

            console.log(`${n}% ${print}`);
            console.log('Still loading...');

        }
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);