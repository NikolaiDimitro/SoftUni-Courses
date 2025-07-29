function pointsValidation(arr) {

    let result = distanceBetweenPoindAndStart(arr[0], arr[1]);

    if (Number.isInteger(result)) {

        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is valid`);

    } else {

        console.log(`{${arr[0]}, ${arr[1]}} to {0, 0} is invalid`);

    }

    result = distanceBetweenPoindAndStart(arr[2], arr[3]);

    if (Number.isInteger(result)) {

        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is valid`);

    } else {

        console.log(`{${arr[2]}, ${arr[3]}} to {0, 0} is invalid`);

    }

    result = distanceBetweenFirstAndSecondPoint(arr[0], arr[1], arr[2], arr[3]);

    if (Number.isInteger(result)) {

        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);

    } else {

        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is invalid`);

    }

    function distanceBetweenPoindAndStart(x, y) {

        let result = Math.sqrt(x ** 2 + y ** 2);
        return result;

    }

    function distanceBetweenFirstAndSecondPoint(x1, y1, x2, y2) {

        let result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return result;

    }
}
pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);