function workingHours(hour, dayOfWeek) {

    switch (dayOfWeek) {

        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':

            if (hour >= 10 && hour <= 18) {

                console.log('open');

            } else {

                console.log('closed');

            }

            break;

        case 'Sunday':

            console.log('closed');

    }
}
workingHours(11, "Monday");
workingHours(19, "Friday");
workingHours(11, "Sunday");