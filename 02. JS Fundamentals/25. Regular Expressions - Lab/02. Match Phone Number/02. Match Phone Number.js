function matchPhoneNumber(arr) {

    arr = arr[0].split(', ');

    let pattern = /\+359(?<first>\s|-)2\k<first>\d{3}\k<first>\d{4}\b/g;
    let validNumbers = [];

    while ((exec = pattern.exec(arr)) !== null) {

        validNumbers.push(exec[0]);

    }

    console.log(validNumbers.join(', '));

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);
matchPhoneNumber(['+359 2 357 3351 +359 2 22 2222 +359 2 173 3408 +359-2-789-2584 +359 2 193 3953 +359-2-961-0248 +359-2-789-2584 +359 2 222 222 +360 2 222 2222 +359 2 727 9740 +359-2-854-2280 +359 2 193 3953 +359 2 357 3351 +359 2 558 8560 +359 2 222 222']);