function footballLeague(arr) {

    let capacityOfStadium = Number(arr[0]);
    let countOfFans = Number(arr[1]);
    let countOfASector = 0;
    let countOfBSector = 0;
    let countOfVSector = 0;
    let countOfGSector = 0;

    for (let i = 2; i <= arr.length; i++) {

        if (arr[i] === 'A') {

            countOfASector++;

        } else if (arr[i] === 'B') {

            countOfBSector++;

        } else if (arr[i] === 'V') {

            countOfVSector++;

        } else if (arr[i] === 'G') {

            countOfGSector++;

        }
    }

    console.log(`${((countOfASector / countOfFans) * 100).toFixed(2)}%`);
    console.log(`${((countOfBSector / countOfFans) * 100).toFixed(2)}%`);
    console.log(`${((countOfVSector / countOfFans) * 100).toFixed(2)}%`);
    console.log(`${((countOfGSector / countOfFans) * 100).toFixed(2)}%`);
    console.log(`${((countOfFans / capacityOfStadium) * 100).toFixed(2)}%`);

}
footballLeague((["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]));
footballLeague((["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]));
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);