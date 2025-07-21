function movieRating(arr) {

    let countMovie = Number(arr[0]);
    let minRating = Number.MAX_SAFE_INTEGER;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let sumOfRating = 0;
    let minRatingMovie = '';
    let maxRatingMovie = '';

    for (let i = 1; i < arr.length; i += 2) {

        let currentMovie = arr[i];
        let currentMovieRating = Number(arr[i + 1]);

        sumOfRating += currentMovieRating;

        if (minRating > currentMovieRating) {

            minRating = currentMovieRating;
            minRatingMovie = currentMovie;

        }

        if (maxRating < currentMovieRating) {

            maxRating = currentMovieRating;
            maxRatingMovie = currentMovie;

        }
    }

    console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingMovie} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(sumOfRating / countMovie).toFixed(1)}`);

}
movieRating((["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]));
movieRating((["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"]));