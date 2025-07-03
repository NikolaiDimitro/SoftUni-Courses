function salary(tabs) {

    let total = 0;

    for (let i = 2; i <= tabs.length; i++) {

        if (tabs[i] === 'Facebook') {

            total += 150;

            if (total >= tabs[1]) {

                console.log('You have lost your salary.');
                return;

            }

        } else if (tabs[i] === 'Instagram') {

            total += 100;

            if (total >= tabs[1]) {

                console.log('You have lost your salary.');
                return;

            }

        } else if (tabs[i] === 'Reddit') {

            total += 50;

            if (total >= tabs[1]) {

                console.log('You have lost your salary.');
                return;

            }
        }
    }

    console.log(tabs[1] - total);

}
salary(([10, 750, "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]));
salary(([3, 500, "Github.com", "Stackoverflow.com", "softuni.bg"]));