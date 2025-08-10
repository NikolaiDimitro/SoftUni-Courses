function armies(input) {

    let leaders = new Map();

    for (let line of input) {
        if (line.includes(' arrives')) {

            let leader = line.replace(' arrives', '');
            leaders.set(leader, new Map());

        }
        else if (line.includes(':')) {

            let [leader, armyInfo] = line.split(': ');
            let [armyName, armyCount] = armyInfo.split(', ');
            armyCount = Number(armyCount);

            if (leaders.has(leader)) {

                leaders.get(leader).set(armyName, armyCount);

            }
        }
        else if (line.includes(' + ')) {

            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);

            for (let armies of leaders.values()) {

                if (armies.has(armyName)) {

                    armies.set(armyName, armies.get(armyName) + armyCount);

                }
            }
        }
        else if (line.includes(' defeated')) {

            let leader = line.replace(' defeated', '');
            leaders.delete(leader);

        }
    }

    let sorted = new Map(
        [...leaders.entries()]
            .sort((a, b) => {
                let totalA = Array.from(a[1].values()).reduce((sum, val) => sum + val, 0);
                let totalB = Array.from(b[1].values()).reduce((sum, val) => sum + val, 0);
                return totalB - totalA;
            }));

    let value = Array.from(sorted.values());

    for (let [leader, armies] of sorted) {

        let totalArmy = Array.from(armies.values()).reduce((a, b) => a + b, 0);
        console.log(`${leader}: ${totalArmy}`);

        let sortedArmies = [...armies.entries()].sort((a, b) => b[1] - a[1]);

        for (let [armyName, count] of sortedArmies) {

            console.log(`>>> ${armyName} - ${count}`);

        }
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']);