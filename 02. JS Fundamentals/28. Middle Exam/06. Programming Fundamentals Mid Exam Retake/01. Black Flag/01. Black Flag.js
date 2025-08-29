function blackFlag(arr) {

    let day = Number(arr.shift());
    let plunderPerDay = Number(arr.shift());
    let expectationsPlunder = Number(arr.shift());
    let sum = 0;

    for (let i = 1; i <= day; i++) {

        if (i % 3 === 0) {

            sum += plunderPerDay * 1.5;

        } else {

            sum += plunderPerDay;

        }

        if (i % 5 === 0) {

            sum *= 0.7;

        }
    }

    if (sum >= expectationsPlunder) {

        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);

    } else {

        console.log(`Collected only ${((sum / expectationsPlunder) * 100).toFixed(2)}% of the plunder.`);

    }
}
blackFlag((["5", "40", "100"]));
blackFlag((["10", "20", "380"]));