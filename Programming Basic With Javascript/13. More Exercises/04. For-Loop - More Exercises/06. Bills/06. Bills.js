function bills(arr) {

    let totalElectricity = 0;
    let totalOthers = 0;
    let total = 0;

    for (let i = 1; i < arr.length; i++) {

        let current = Number(arr[i]);

        totalElectricity += current;
        
        let theExpensesOfTheSpecificMonth = current + 20 + 15;
        let others = theExpensesOfTheSpecificMonth * 1.2;

        totalOthers += others;
        total += current + 20 + 15 + others;

    }

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${(Number(arr[0]) * 20).toFixed(2)} lv`);
    console.log(`Internet: ${(Number(arr[0]) * 15).toFixed(2)} lv`);
    console.log(`Other: ${totalOthers.toFixed(2)} lv`);
    console.log(`Average: ${(total / Number(arr[0])).toFixed(2)} lv`);

}
bills((["5", "68.63", "89.25", "132.53", "93.53", "63.22"]));
bills((["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]));