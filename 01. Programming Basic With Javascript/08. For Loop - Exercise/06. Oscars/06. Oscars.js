function oscar(arr) {

    let total = 0;
    total += Number(arr[1]);

    for (let i = 4; i <= arr.length; i += 2) {

        if (i % 2 === 0) {

            total += (arr[i - 1].length * Number(arr[i])) / 2;

        }

        if (total > 1250.5) {

            console.log(`Congratulations, ${arr[0]} got a nominee for leading role with ${total.toFixed(1)}!`);

            return;

        }
    }

    if (total <= 1250.5) {

        console.log(`Sorry, ${arr[0]} you need ${(1250.5 - total).toFixed(1)} more!`);

    }
}
oscar((["Zahari Baharov", "205", 4, "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]));
oscar((["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]));