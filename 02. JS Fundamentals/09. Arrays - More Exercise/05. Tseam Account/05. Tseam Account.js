function tseamAccount(arr) {

    let games = arr.shift().split(' ');
    let isHave = false;

    for (let i = 0; i < arr.length; i++) {

        isHave = false;

        if (arr[i] === 'Play!') {

            break;

        }

        let current = arr[i].split(' ');

        if (current[0] === 'Install') {

            for (let j = 0; j < games.length; j++) {

                if (games[j] === current[1]) {

                    isHave = true;
                    break;

                }
            }

            if (!isHave) {

                games.push(current[1]);
                isHave = false;

            }

        } else if (current[0] === 'Uninstall') {

            games = games.filter(game => game !== current[1]);

        } else if (current[0] === 'Update') {

            for (let j = 0; j < games.length; j++) {

                if (games[j] === current[1]) {

                    isHave = true;
                    break;

                }
            }

            if (isHave) {

                games = games.filter(games => games !== current[1]);
                isHave = false;
                games.push(current[1]);

            }

        } else {

            let exp = current[1].split('-');

            if (games.includes(exp[0])) {

                let index = games.indexOf(exp[0]);

                games.splice(index + 1, 0, `${exp[0]}:${exp[1]}`)

            }
        }
    }

    console.log(games.join(' '));

}
tseamAccount(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
tseamAccount(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);