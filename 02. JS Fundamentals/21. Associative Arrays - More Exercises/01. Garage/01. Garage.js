function garage(arr) {

    let garages = {};

    for (let line of arr) {

        let [garage, carInfo] = line.split(' - ');
        let car = {};

        let parts = carInfo.split(', ');

        for (let info of parts) {

            let [key, value] = info.split(': ');
            car[key] = value;

        }

        if (!garages.hasOwnProperty(garage)) {

            garages[garage] = [];
        }

        garages[garage].push(car);

    }

    for (let garage in garages) {

        console.log(`Garage № ${garage}`);

        for (let car of garages[garage]) {

            let output = Object.entries(car).map(([k, v]) => `${k} - ${v}`).join(', ');
            console.log(`--- ${output}`);

        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type: petrol', '1 - color: dark red, manufacture: WV', '2 - fuel type: diesel', '3 - color: dark blue, fuel type: petrol']);