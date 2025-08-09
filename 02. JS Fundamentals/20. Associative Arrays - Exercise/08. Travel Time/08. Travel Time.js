function travelTime(arr) {

    let map = new Map();

    for (let line of arr) {

        let [country, city, money] = line.split(' > ');
        money = Number(money);

        if (!map.has(country)) {

            map.set(country, {});

        }

        let haveCountry = map.get(country);

        if (!haveCountry[city] || money < haveCountry[city]) {

            haveCountry[city] = money;

        }
    }

    let entries = Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0]));

    entries = entries.map(([country, cities]) => {

        let sortedCities = Object.entries(cities).sort((a, b) => a[1] - b[1]);
        return [country, sortedCities];

    });

    for (let [country, cities] of entries) {

        let print = country + ' -> ';

        for (let [city, price] of cities) {

            print += `${city} -> ${price} `;

        }

        console.log(print);

    }
}
travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"]);
travelTime(['Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimar > 25000', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10']);