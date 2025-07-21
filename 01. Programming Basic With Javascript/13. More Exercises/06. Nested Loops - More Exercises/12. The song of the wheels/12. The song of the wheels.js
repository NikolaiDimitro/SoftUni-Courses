function theSongOfTheWheels(controlValue) {

    let count = 0;
    let print = '';
    let password = '';

    for (let a = 1; a <= 9; a++) {

        for (let b = 1; b <= 9; b++) {

            for (let c = 1; c <= 9; c++) {

                for (let d = 1; d <= 9; d++) {

                    if (a < b && c > d && (a * b + c * d) === controlValue) {

                        count++;

                        print += `${a}${b}${c}${d} `;

                        if (count === 4) {

                            password += `${a}${b}${c}${d}`;

                        }
                    }
                }
            }
        }
    }

    console.log(print);

    if (count >= 4) {

        console.log(`Password: ${password}`);

    } else {

        console.log('No!');

    }
}
theSongOfTheWheels(11);
theSongOfTheWheels(139);
theSongOfTheWheels(110);
theSongOfTheWheels(55);