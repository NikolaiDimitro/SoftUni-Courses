function race(data) {

    let participants = {};
    let participantsArr = data.shift().split(`, `);

    for (let driver of participantsArr) {

        participants[driver] = 0;

    }

    let patternName = /[A-Za-z]+/g;
    let patternDistance = /[0-9]/g;

    for (let line of data) {

        if (line === 'end of race') {

            break;

        }

        let name = line.match(patternName).join('');
        let distance = 0;
        let distanceAsArr = line.match(patternDistance);

        for (let el of distanceAsArr) {

            distance += Number(el);

        }

        if (participants.hasOwnProperty(name)) {

            participants[name] += distance;

        }
    }

    let sortArr = Object.entries(participants).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortArr[0][0]}`);
    console.log(`2nd place: ${sortArr[1][0]}`);
    console.log(`3rd place: ${sortArr[2][0]}`);

}
race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);