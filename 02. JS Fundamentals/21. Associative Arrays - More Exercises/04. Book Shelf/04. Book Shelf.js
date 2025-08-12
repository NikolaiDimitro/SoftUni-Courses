function bookShelf(arr) {

    let shelfMap = new Map;
    let map = new Map();
    let shelfSet = new Set();

    for (let books of arr) {

        if (books.includes(' -> ')) {

            let [id, genre] = books.split(' -> ');

            if (!shelfSet.has(id)) {

                shelfSet.add(id);
                map.set(id, genre);

            }

        } else {

            let [title, authorAndGenre] = books.split(': ');
            let [author, genre] = authorAndGenre.split(', ');

            for (let genres of map) {

                let newArr = [];

                if (genres[1] === genre) {

                    if (!shelfMap.has(genres[0])) {

                        shelfMap.set(genres[0], [{ title, author }]);

                    } else {

                        let current = shelfMap.get(genres[0]);

                        for (let last of current) {

                            newArr.push(last);

                        }

                        newArr.push({ title, author });
                        shelfMap.set(genres[0], newArr);

                    }
                }
            }
        }
    }

    let sort = Array.from(shelfMap.values()).sort((a, b) => b.length - a.length);

    for (let shelf of sort) {

        let entries = shelfMap.entries(shelf);

        for (let key of entries) {

            if (shelf === key[1]) {

                if (map.has(key[0])) {

                    for (let numb of map) {

                        if (numb[0] === key[0]) {

                            console.log(`${key[0]} ${numb[1]}: ${key[1].length}`);

                        }
                    }
                }
            }
        }

        for (let books of shelf) {

            console.log(`--> ${books.title}: ${books.author}`);

        }
    }
}
bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);
bookShelf(['1 -> mystery', '2 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Lions and Rats: Gabe Roads, history', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi']);