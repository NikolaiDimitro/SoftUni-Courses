function pirates(arr) {

    let index = 0;
    let obj = {};

    while (arr[index] !== 'Sail') {

        let current = arr[index];

        let [city, population, gold] = current.split('||');

        if (!obj.hasOwnProperty(city)) {

            obj[city] = { population: Number(population), gold: Number(gold) };

        } else {

            obj[city].population += Number(population);
            obj[city].gold += Number(gold);

        }

        index++;

    }

    index++;

    while (arr[index] !== 'End') {

        let current = arr[index];

        if (current.includes('Plunder')) {

            let [command, town, people, gold] = current.split('=>');

            obj[town].population -= Number(people);
            obj[town].gold -= Number(gold);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (obj[town].population <= 0 || obj[town].gold <= 0) {

                delete obj[town];
                console.log(`${town} has been wiped off the map!`);

            }

        } else if (current.includes('Prosper')) {

            let [command, town, gold] = current.split('=>');

            if (Number(gold) < 0) {

                console.log(`Gold added cannot be a negative number!`);

            } else {

                obj[town].gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`);

            }
        }

        index++;

    }

    let entries = Object.entries(obj);

    if (entries.length > 0) {

        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);

        for (let town of entries) {

            console.log(`${town[0]} -> Population: ${town[1].population} citizens, Gold: ${town[1].gold} kg`);

        }

    } else {

        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);

    }
}
pirates(["Tortuga||345000||1250", "Santo Domingo||240000||630", "Havana||410000||1100", "Sail", "Plunder=>Tortuga=>75000=>380", "Prosper=>Santo Domingo=>180", "End"]);
pirates(["Nassau||95000||1000", "San Juan||930000||1250", "Campeche||270000||690", "Port Royal||320000||1000", "Port Royal||100000||2000", "Sail", "Prosper=>Port Royal=>-200", "Plunder=>Nassau=>94000=>750", "Plunder=>Nassau=>1000=>150", "Plunder=>Campeche=>150000=>690", "End"]);