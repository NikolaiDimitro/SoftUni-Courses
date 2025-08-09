function piccolo(arr) {

    let set = new Set();

    for (let car of arr) {

        car = car.split(', ');

        if (car[0] === 'IN') {

            set.add(car[1]);

        } else if (car[0] === 'OUT') {

            set.delete(car[1]);

        }
    }

    let sort = Array.from(set).sort((a, b) => a.localeCompare(b));

    if (sort.length === 0) {

        console.log('Parking Lot is Empty');

    } else {

        for (let carNumber of sort) {

            console.log(carNumber);

        }
    }
}
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']);
piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);