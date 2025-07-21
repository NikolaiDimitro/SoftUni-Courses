function favoriteMovie(arr) {

    let index = 0;
    let sum = 0;
    let maxSum = 0;
    let winner = '';
    let count = 0;

    while (arr[index] !== 'STOP') {

        let currentMovie = arr[index];
        count++;

        for (let i = 0; i < currentMovie.length; i++) {

            let letter = currentMovie[i];
            let numberOfLetter = letter.charCodeAt();

            sum += numberOfLetter;

            if (numberOfLetter >= 97 && numberOfLetter <= 122) {

                sum -= currentMovie.length * 2;

            } else if (numberOfLetter >= 65 && numberOfLetter <= 90) {

                sum -= currentMovie.length;

            }
        }

        if (maxSum < sum) {

            maxSum = sum;
            winner = currentMovie;

        }

        if (count === 7) {

            console.log(`The limit is reached.`);
            break;

        }

        sum = 0;
        index++;

    }

    console.log(`The best movie for you is ${winner} with ${maxSum} ASCII sum.`);

}
favoriteMovie(["Matrix", "Breaking bad", "Legend", "STOP"]);
favoriteMovie(["Wrong turn", "The maze", "Area 51", "Night Club", "Ice age", "Harry Potter", "Wizards"]);