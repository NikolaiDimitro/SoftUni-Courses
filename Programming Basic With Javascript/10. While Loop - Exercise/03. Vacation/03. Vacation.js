function vacation(arr) {

    let index = 2;
    let countOfDays = 0;
    let needMoney = Number(arr[0]);
    let startMoney = Number(arr[1]);
    let total = startMoney;
    let count = 0;

    while (index < arr.length - 1) {

        if (arr[index] === 'spend') {

            if (total < Number(arr[index + 1])) {

                total = 0;

            } else {

                total -= Number(arr[index + 1]);

            }

            countOfDays += 1;
            count++;

        } else {

            total += Number(arr[index + 1]);
            countOfDays = 0;
            count++;

        }

        if (countOfDays === 5) {

            console.log(`You can't save the money.`);
            console.log(`${count}`);
            break;

        }

        index += 2;

        if (needMoney <= total) {

            console.log(`You saved the money for ${count} days.`);

        }
    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);