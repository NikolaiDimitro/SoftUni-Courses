function oscar(arr) {

    let index = 0;
    let nameOfActor = arr[index];
    index++;
    let pointsFromAcademy = Number(arr[1]);
    index += 2;
    let totalPoint = 0;
    let currentNameOfActor = arr[index];

    totalPoint += pointsFromAcademy;

    while (index < arr.length) {

        currentNameOfActor = arr[index];
        let lengthOfName = currentNameOfActor.length;
        index++;

        let currentPointFromActor = Number(arr[index]);
        totalPoint += ((currentPointFromActor * lengthOfName) / 2);

        if (totalPoint > 1250.5) {

            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${totalPoint.toFixed(1)}!`);
            break;

        }

        index++;

    }

    if (totalPoint < 1250.5) {

        console.log(`Sorry, ${nameOfActor} you need ${(1250.5 - totalPoint).toFixed(1)} more!`);

    }
}
oscar((["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]));
oscar((["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]));