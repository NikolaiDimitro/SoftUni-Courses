function squareOfStars(numb) {

    let size = 0;

    if (numb) {

        size = numb;

    } else {

        size = 5;

    }

    for (let row = 0; row < size; row++) {

        let str = '';

        for (let colums = 0; colums < size; colums++) {

            str += '* ';

        }

        console.log(str);

    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);