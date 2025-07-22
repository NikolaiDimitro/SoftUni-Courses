function ages(ages) {

    let stage = '';

    if (ages >= 0 && ages <= 2) {

        stage = 'baby';

    } else if (ages >= 3 && ages <= 13) {

        stage = 'child';

    } else if (ages >= 14 && ages <= 19) {

        stage = 'teenager';

    } else if (ages >= 20 && ages <= 65) {

        stage = 'adult';

    } else if (ages > 65) {

        stage = 'elder';

    } else {

        stage = 'out of bounds';

    }

    console.log(stage);

}
ages(20);
ages(1);
ages(100);
ages(-1);