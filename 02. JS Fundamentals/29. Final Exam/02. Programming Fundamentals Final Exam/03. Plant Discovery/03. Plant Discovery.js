function plantDiscovery(arr) {
    let n = Number(arr.shift());
    let obj = {};

    for (let i = 0; i < n; i++) {

        let [plant, rarity] = arr.shift().split('<->');
        obj[plant] = { rarity: Number(rarity), Rating: [] };

    }

    let commandLine = arr.shift();
    while (commandLine !== 'Exhibition') {

        let [command, info] = commandLine.split(': ');

        if (command === 'Rate') {

            let [plant, rating] = info.split(' - ');

            if (obj.hasOwnProperty(plant)) {

                obj[plant].Rating.push(Number(rating));

            } else {

                console.log('error');

            }

        } else if (command === 'Update') {

            let [plant, newRarity] = info.split(' - ');

            if (obj.hasOwnProperty(plant)) {

                obj[plant].rarity = Number(newRarity);

            } else {

                console.log('error');

            }

        } else if (command === 'Reset') {

            let plant = info;

            if (obj.hasOwnProperty(plant)) {

                obj[plant].Rating = [];

            } else {

                console.log('error');

            }
        }

        commandLine = arr.shift()
    }

    console.log('Plants for the exhibition:');

    for (let [plant, data] of Object.entries(obj)) {
        
        let ratings = data.Rating;
        let average = ratings.length > 0 ? ratings.reduce((a, b) => a + b, 0) / ratings.length: 0;
        console.log(`- ${plant}; Rarity: ${data.rarity}; Rating: ${average.toFixed(2)}`);

    }
}
plantDiscovery((["3", "Arnoldii<->4", "Woodii<->7", "Welwitschia<->2", "Rate: Woodii - 10", "Rate: Welwitschia - 7", "Rate: Arnoldii - 3", "Rate: Woodii - 5", "Update: Woodii - 5", "Reset: Arnoldii", "Exhibition"]));
plantDiscovery((["2", "Candelabra<->10", "Oahu<->10", "Rate: Oahu - 7", "Rate: Candelabra - 6", "Exhibition"]));