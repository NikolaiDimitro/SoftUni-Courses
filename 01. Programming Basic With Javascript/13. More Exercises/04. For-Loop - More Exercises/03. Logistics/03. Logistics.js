function logistics(arr) {

    let totalCargo = 0;
    let totalPrice = 0;
    let countCargoWithMicrobus = 0;
    let countCargoWithTruck = 0;
    let countCargoWithTrain = 0;

    for (let i = 1; i < arr.length; i++) {

        let current = Number(arr[i]);

        totalCargo += current;

        if (current <= 3) {

            totalPrice += current * 200;
            countCargoWithMicrobus += current;

        } else if (current <= 11) {

            totalPrice += current * 175;
            countCargoWithTruck += current;

        } else if (current >= 12) {

            totalPrice += current * 120;
            countCargoWithTrain += current;

        }
    }

    console.log((totalPrice / totalCargo).toFixed(2));
    console.log(`${((countCargoWithMicrobus / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((countCargoWithTruck / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((countCargoWithTrain / totalCargo) * 100).toFixed(2)}%`);

}
logistics((["4", "1", "5", "16", "3"]));
logistics((["5", "2", "10", "20", "1", "7"]));