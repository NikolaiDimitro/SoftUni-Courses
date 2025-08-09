function aMinerTask(arr) {

    let map = new Map();
    let index = 0;

    while (index < arr.length) {

        let currentResourses = arr[index];
        index++;
        let countResourses = Number(arr[index]);

        if (!map.has(currentResourses)) {

            map.set(currentResourses, countResourses);

        } else {

            let currentCount = map.get(currentResourses);
            map.set(currentResourses, currentCount + countResourses);

        }

        index++;

    }

    for (let line of map) {

        console.log(`${line[0]} -> ${line[1]}`);

    }
}
aMinerTask(['Gold', '155', 'Silver', '10', 'Copper', '17']);
aMinerTask(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);