function house(n) {

    let roofRows = Math.ceil(n / 2);
    let stars = n % 2 === 0 ? 2 : 1;

    for (let i = 1; i <= roofRows; i++) {

        let dashes = '';
        let line = '';
        let starPart = '';

        for (let j = 1; j <= (n - stars) / 2; j++) {

            dashes += '-';

        }

        for (let j = 1; j <= stars; j++) {

            starPart += '*';

        }

        line = dashes + starPart + dashes;
        console.log(line);
        stars += 2;

    }

    let baseStars = '';

    for (let j = 1; j <= n - 2; j++) {

        baseStars += '*';

    }

    for (let i = 1; i <= Math.floor(n / 2); i++) {

        console.log('|' + baseStars + '|');

    }
}
house(2);
house(3);
house(4);
house(5);
house(6);