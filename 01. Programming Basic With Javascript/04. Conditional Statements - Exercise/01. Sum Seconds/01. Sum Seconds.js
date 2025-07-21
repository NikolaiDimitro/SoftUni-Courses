function sumSeconds(a, b, c) {

    if (((a + b + c) % 60) < 10) {

        console.log(`${Math.floor((a + b + c) / 60)}:0${(a + b + c) % 60} `);

    } else {

        console.log(`${Math.floor((a + b + c) / 60)}:${(a + b + c) % 60} `);

    }
}
sumSeconds(35, 45, 44);
sumSeconds(22, 7, 34);
sumSeconds(50, 50, 49);
sumSeconds(14, 12, 10)