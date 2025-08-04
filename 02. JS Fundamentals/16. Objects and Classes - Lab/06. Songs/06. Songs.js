function songs(arr) {

    class Song {

        constructor(typelist, name, time) {

            this.typelist = typelist;
            this.name = name;
            this.time = time;
            console.log(name);

        }
    }

    let numberOfSongs = arr.shift();
    let typelist = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {

        let [type, name, time] = arr[i].split('_');

        if (type === typelist) {

            let song = new Song(type, name, time);

        } else if (typelist === 'all') {

            let song = new Song(type, name, time);

        }
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);