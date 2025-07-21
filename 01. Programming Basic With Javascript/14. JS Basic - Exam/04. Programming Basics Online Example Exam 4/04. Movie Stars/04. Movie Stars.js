function movieStars(arr) {

    let budget = Number(arr[0]);
    let salary = 0;

    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] === 'ACTION') {

            break;

        }

        let current = arr[i];
        let symbols = current.length;

        if (symbols > 15) {

            salary = budget * 0.2;
            budget -= salary;

        } else {

            salary = Number(arr[i + 1]);
            i++;
            budget -= salary;

        }

        if (budget <= 0) {

            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            break;

        }
    }

    if (budget > 0) {

        console.log(`We are left with ${budget.toFixed(2)} leva.`);

    }
}
movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);