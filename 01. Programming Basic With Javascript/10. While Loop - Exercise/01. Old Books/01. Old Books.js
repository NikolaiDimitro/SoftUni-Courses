function oldBooks(arr) {

    let favoriteBook = arr[0];
    let count = 0;
    let index = 1;

    while (arr[index] !== 'No More Books' || arr[index] <= arr.length) {

        count++;

        if (arr[index] === favoriteBook) {

            console.log(`You checked ${count - 1} books and found it.`);
            break;

        }

        index++;

        if (arr[index] === 'No More Books') {

            console.log('The book you search is not here!');
            console.log(`You checked ${count} books.`);

        }
    }
}
oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
oldBooks(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
oldBooks(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Tripple", "Stella", "The Matrix", "Bourne"]);