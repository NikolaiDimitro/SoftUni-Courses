function movies(arr) {

    let newArray = [];

    for (let i of arr) {

        let obj = {};

        i = i.split(' ');

        if (i[0] === 'addMovie') {

            let command = i.shift();
            let movie = i.join(' ');

            obj['name'] = movie;

            newArray.push(obj)

        } else if (i.includes('directedBy')) {

            let director = '';
            let moveiWithoutDirector = '';
            let index = i.indexOf('directedBy');

            for (let j = 0; j < i.length; j++) {

                if (i[j] === 'directedBy') {

                    break;

                }

                moveiWithoutDirector += i[j] + ' ';

            }

            for (let j = index + 1; j < i.length; j++) {

                director += i[j] + ' ';

            }

            moveiWithoutDirector = moveiWithoutDirector.trim();
            director = director.trim();

            for (let movie of newArray) {

                if (movie.name === moveiWithoutDirector) {

                    movie['director'] = director;

                }
            }

        } else if (i.includes('onDate')) {

            let index = i.indexOf('onDate');

            let movieWithoutDate = '';
            let date = '';

            for (let j = 0; j < index; j++) {

                movieWithoutDate += i[j] + ' ';

            }

            movieWithoutDate = movieWithoutDate.trim();
            date = i[index + 1];

            for (let movie of newArray) {

                if (movie.name === movieWithoutDate) {

                    movie['date'] = date;

                }
            }
        }
    }

    let filterArray = newArray.filter(x => 'name' in x && 'director' in x && 'date' in x);

    let entries = Object.entries(filterArray);

    for (let i of entries) {

        let json = JSON.stringify(i[1]);
        console.log(json);

    }

}
movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen']);
movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo']);