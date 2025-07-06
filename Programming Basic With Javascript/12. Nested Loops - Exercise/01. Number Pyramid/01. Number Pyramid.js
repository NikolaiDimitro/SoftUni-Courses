function numberPyramid(number) {

    let print = '';
    let current = 1;
    let isBigger = false;

    for (let i = 1; i <= number; i++) {

        for (let j = 1; j <= i; j++) {

            if (current > number) {

                isBigger = true;
                break;

            }

            print += current + ' ';
            current++;

        }

        console.log(print);
        print = '';
        if (isBigger) {

            break;

        }
    }
}
numberPyramid(7);
numberPyramid(12);
numberPyramid(15);
numberPyramid();