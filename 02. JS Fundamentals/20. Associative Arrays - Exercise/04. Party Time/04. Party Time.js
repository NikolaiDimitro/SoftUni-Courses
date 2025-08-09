function partyTime(arr) {

    let vipSet = new Set();
    let normalSet = new Set();
    let vipList = [];
    let normalList = [];

    let index = 0;

    while (arr[index] !== 'PARTY') {

        let guest = arr[index];

        if (guest[0] >= '0' && guest[0] <= '9') {

            vipSet.add(guest);
            vipList.push(guest);

        } else {

            normalSet.add(guest);
            normalList.push(guest);

        }

        index++;

    }

    index++;

    while (index < arr.length) {

        let guest = arr[index];

        if (vipSet.has(guest)) {

            let pos = vipList.indexOf(guest);
            if (pos !== -1) vipList.splice(pos, 1);

        } else if (normalSet.has(guest)) {

            let pos = normalList.indexOf(guest);
            if (pos !== -1) normalList.splice(pos, 1);

        }

        index++;

    }

    console.log(vipList.length + normalList.length);
    vipList.forEach(g => console.log(g));
    normalList.forEach(g => console.log(g));

}
partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']);
partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']);