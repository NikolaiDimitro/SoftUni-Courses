function weatherForecastPart2(degrees) {

    if (degrees >= 5 && degrees <= 11.9) {

        console.log('Cold');

    } else if (degrees >= 12 && degrees <= 14.9) {

        console.log('Cool');

    } else if (degrees >= 15 && degrees <= 20) {

        console.log('Mild');

    } else if (degrees >= 20.1 && degrees <= 25.9) {

        console.log('Warm');

    } else if (degrees >= 26 && degrees <= 35) {

        console.log('Hot');

    } else {

        console.log('unknown');

    }
}
weatherForecastPart2(16.5);
weatherForecastPart2(8);
weatherForecastPart2(22.4);
weatherForecastPart2(26);
weatherForecastPart2(0);